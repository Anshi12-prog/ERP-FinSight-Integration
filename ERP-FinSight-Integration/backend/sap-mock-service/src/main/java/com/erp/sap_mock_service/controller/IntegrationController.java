package com.erp.sap_mock_service.controller;

import com.erp.sap_mock_service.dto.FinancialSummaryResponse;
import com.erp.sap_mock_service.service.FinSightIntegrationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/v1/finsight")
@Tag(name = "FinSight Integration", description = "Financial Analytics APIs")
public class IntegrationController {

    private final FinSightIntegrationService service;

    public IntegrationController(FinSightIntegrationService service) {
        this.service = service;
    }

    @Operation(summary = "Get Financial Summary")
    @GetMapping("/summary")
    public FinancialSummaryResponse getSummary() {
        return service.getFinancialSummary();
    }

}
