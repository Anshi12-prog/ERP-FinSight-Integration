package com.erp.sap_mock_service.dto; 
import lombok.Builder; 
import lombok.Data; 
@Data 
@Builder public class GeneralLedgerResponse { 
    private String documentId;
     private String companyCode; 
     private String fiscalYear; 
     private String glAccount; 
     private Double amount;
    private String currency; 
}
