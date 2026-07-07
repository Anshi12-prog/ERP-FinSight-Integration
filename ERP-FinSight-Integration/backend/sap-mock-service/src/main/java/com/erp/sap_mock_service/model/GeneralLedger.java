package com.erp.sap_mock_service.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "general_ledger")
public class GeneralLedger {

    @Id
    private String documentId;

    private String companyCode;
    private String fiscalYear;
    private String glAccount;
    private Double amount;
    private String currency;

    public GeneralLedger() {
    }

    public GeneralLedger(String documentId, String companyCode, String fiscalYear,
                         String glAccount, Double amount, String currency) {
        this.documentId = documentId;
        this.companyCode = companyCode;
        this.fiscalYear = fiscalYear;
        this.glAccount = glAccount;
        this.amount = amount;
        this.currency = currency;
    }

    public String getDocumentId() {
        return documentId;
    }

    public void setDocumentId(String documentId) {
        this.documentId = documentId;
    }

    public String getCompanyCode() {
        return companyCode;
    }

    public void setCompanyCode(String companyCode) {
        this.companyCode = companyCode;
    }

    public String getFiscalYear() {
        return fiscalYear;
    }

    public void setFiscalYear(String fiscalYear) {
        this.fiscalYear = fiscalYear;
    }

    public String getGlAccount() {
        return glAccount;
    }

    public void setGlAccount(String glAccount) {
        this.glAccount = glAccount;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }
}