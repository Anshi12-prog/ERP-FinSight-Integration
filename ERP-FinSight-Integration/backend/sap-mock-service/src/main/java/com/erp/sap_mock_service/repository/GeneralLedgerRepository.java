package com.erp.sap_mock_service.repository;

import com.erp.sap_mock_service.model.GeneralLedger;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface GeneralLedgerRepository
        extends JpaRepository<GeneralLedger, String> {

    List<GeneralLedger> findByCompanyCode(String companyCode);

    List<GeneralLedger> findByFiscalYear(String fiscalYear);

    Optional<GeneralLedger> findByDocumentId(String documentId);
    List<GeneralLedger> findByCompanyCodeAndFiscalYear(
        String companyCode,
        String fiscalYear);

List<GeneralLedger> findByAmountBetween(
        Double minAmount,
        Double maxAmount);

List<GeneralLedger> findByGlAccount(
        String glAccount);

    @Query("SELECT SUM(g.amount) FROM GeneralLedger g")
Double getTotalAmount();

@Query("SELECT AVG(g.amount) FROM GeneralLedger g")
Double getAverageAmount();
}