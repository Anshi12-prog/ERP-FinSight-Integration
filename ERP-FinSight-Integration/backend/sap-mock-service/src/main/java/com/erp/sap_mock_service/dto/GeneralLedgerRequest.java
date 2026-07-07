package com.erp.sap_mock_service.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;

@Data
public class GeneralLedgerRequest {

    @NotBlank(message = "Document ID is required")
    private String documentId;

    @NotBlank(message = "Company Code is required")
    private String companyCode;

    @NotBlank(message = "GL Account is required")
    private String glAccount;

    @NotNull(message = "Amount is required")
    @Positive(message = "Amount must be greater than zero")
    private Double amount;

    @NotBlank(message = "Fiscal Year is required")
    private String fiscalYear;

    @NotBlank(message = "Currency is required")
    private String currency;
}
