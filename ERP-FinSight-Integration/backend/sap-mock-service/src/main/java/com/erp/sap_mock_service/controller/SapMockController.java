package com.erp.sap_mock_service.controller;

import com.erp.sap_mock_service.model.GeneralLedger;
import com.erp.sap_mock_service.service.GeneralLedgerService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mock/sap")
public class SapMockController {

    private final GeneralLedgerService service;

    public SapMockController(GeneralLedgerService service) {
        this.service = service;
    }

    @GetMapping("/general-ledger")
    public List<GeneralLedger> getSAPGeneralLedger() {
        return service.getAllEntries();
    }

    @GetMapping("/general-ledger/{documentId}")
    public GeneralLedger getLedgerByDocument(
            @PathVariable String documentId) {

        return service.getByDocument(documentId);
    }

}
