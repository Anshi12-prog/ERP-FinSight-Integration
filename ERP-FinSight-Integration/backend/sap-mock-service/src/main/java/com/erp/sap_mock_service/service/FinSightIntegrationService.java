package com.erp.sap_mock_service.service;

import com.erp.sap_mock_service.dto.FinancialSummaryResponse;
import com.erp.sap_mock_service.repository.GeneralLedgerRepository;
import org.springframework.stereotype.Service;

@Service
public class FinSightIntegrationService {

    private final GeneralLedgerRepository repository;

    public FinSightIntegrationService(GeneralLedgerRepository repository) {
        this.repository = repository;
    }

    public FinancialSummaryResponse getFinancialSummary() {

        Long totalDocuments = repository.count();

        Double totalAmount = repository.getTotalAmount();
        if (totalAmount == null) {
            totalAmount = 0.0;
        }

        Double averageAmount = repository.getAverageAmount();
        if (averageAmount == null) {
            averageAmount = 0.0;
        }

        return new FinancialSummaryResponse(
                totalDocuments,
                totalAmount,
                averageAmount
        );
    }
}
