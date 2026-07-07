package com.erp.sap_mock_service.dto;

public class FinancialSummaryResponse {

    private Long totalDocuments;
    private Double totalAmount;
    private Double averageAmount;

    public FinancialSummaryResponse() {
    }

    public FinancialSummaryResponse(Long totalDocuments,
                                    Double totalAmount,
                                    Double averageAmount) {
        this.totalDocuments = totalDocuments;
        this.totalAmount = totalAmount;
        this.averageAmount = averageAmount;
    }

    public Long getTotalDocuments() {
        return totalDocuments;
    }

    public void setTotalDocuments(Long totalDocuments) {
        this.totalDocuments = totalDocuments;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Double getAverageAmount() {
        return averageAmount;
    }

    public void setAverageAmount(Double averageAmount) {
        this.averageAmount = averageAmount;
    }
}
