package com.erp.sap_mock_service.util;

import com.erp.sap_mock_service.dto.GeneralLedgerRequest;
import com.erp.sap_mock_service.dto.GeneralLedgerResponse;
import com.erp.sap_mock_service.model.GeneralLedger;

public class GeneralLedgerMapper {

    public static GeneralLedger toEntity(GeneralLedgerRequest request){

        GeneralLedger ledger = new GeneralLedger();

        ledger.setDocumentId(request.getDocumentId());
        ledger.setCompanyCode(request.getCompanyCode());
        ledger.setFiscalYear(request.getFiscalYear());
        ledger.setGlAccount(request.getGlAccount());
        ledger.setAmount(request.getAmount());
        ledger.setCurrency(request.getCurrency());

        return ledger;
    }

    public static GeneralLedgerResponse toResponse(GeneralLedger ledger){

        return GeneralLedgerResponse.builder()

                .documentId(ledger.getDocumentId())
                .companyCode(ledger.getCompanyCode())
                .fiscalYear(ledger.getFiscalYear())
                .glAccount(ledger.getGlAccount())
                .amount(ledger.getAmount())
                .currency(ledger.getCurrency())
                .build();
    }

}
