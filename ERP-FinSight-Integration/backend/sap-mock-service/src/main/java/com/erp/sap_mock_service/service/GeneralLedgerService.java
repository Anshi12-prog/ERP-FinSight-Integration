package com.erp.sap_mock_service.service;

import com.erp.sap_mock_service.dto.GeneralLedgerRequest;
import com.erp.sap_mock_service.dto.GeneralLedgerResponse;
import com.erp.sap_mock_service.exception.ResourceNotFoundException;
import com.erp.sap_mock_service.model.GeneralLedger;
import com.erp.sap_mock_service.repository.GeneralLedgerRepository;
import com.erp.sap_mock_service.util.GeneralLedgerMapper;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@Service
public class GeneralLedgerService {

    private final GeneralLedgerRepository repository;

    public GeneralLedgerService(GeneralLedgerRepository repository) {
        this.repository = repository;
        
    }

    // ==========================
    // CREATE
    // ==========================

    public GeneralLedgerResponse save(GeneralLedgerRequest request) {

        GeneralLedger ledger = GeneralLedgerMapper.toEntity(request);

        GeneralLedger savedLedger = repository.save(ledger);

        return GeneralLedgerMapper.toResponse(savedLedger);
    }

    // ==========================
    // READ
    // ==========================

    public List<GeneralLedger> getAllEntries() {
        return repository.findAll();
    }

    public List<GeneralLedger> getByCompany(String companyCode) {
        return repository.findByCompanyCode(companyCode);
    }

    public List<GeneralLedger> getByFiscalYear(String fiscalYear) {
        return repository.findByFiscalYear(fiscalYear);
    }

    public GeneralLedger getByDocument(String documentId) {

        return repository.findByDocumentId(documentId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Ledger with Document ID " + documentId + " not found"));
    }

    // ==========================
    // UPDATE
    // ==========================

    public GeneralLedger updateEntry(String documentId, GeneralLedger updatedLedger) {

        GeneralLedger existingLedger = repository.findByDocumentId(documentId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Ledger with Document ID " + documentId + " not found"));

        existingLedger.setCompanyCode(updatedLedger.getCompanyCode());
        existingLedger.setFiscalYear(updatedLedger.getFiscalYear());
        existingLedger.setGlAccount(updatedLedger.getGlAccount());
        existingLedger.setAmount(updatedLedger.getAmount());
        existingLedger.setCurrency(updatedLedger.getCurrency());

        return repository.save(existingLedger);
    }

    // ==========================
    // DELETE
    // ==========================

    public void deleteEntry(String documentId) {

        GeneralLedger ledger = repository.findByDocumentId(documentId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Ledger with Document ID " + documentId + " not found"));

        repository.delete(ledger);
        logger.info("Deleting Document {}", documentId);
    }

    // ==========================
    // ADVANCED SEARCH
    // ==========================

    public List<GeneralLedger> getByCompanyAndYear(
            String companyCode,
            String fiscalYear) {

        return repository.findByCompanyCodeAndFiscalYear(
                companyCode,
                fiscalYear);
    }

    public List<GeneralLedger> getByAmountRange(
            Double min,
            Double max) {

        return repository.findByAmountBetween(min, max);
    }

    public List<GeneralLedger> getByGlAccount(String glAccount) {

        return repository.findByGlAccount(glAccount);
    }

    public Page<GeneralLedger> getPaginatedEntries(
        int page,
        int size,
        String sortBy) {

    Pageable pageable = PageRequest.of(
            page,
            size,
            Sort.by(sortBy));

    return repository.findAll(pageable);
}

private static final Logger logger =
        LoggerFactory.getLogger(GeneralLedgerService.class);

}
