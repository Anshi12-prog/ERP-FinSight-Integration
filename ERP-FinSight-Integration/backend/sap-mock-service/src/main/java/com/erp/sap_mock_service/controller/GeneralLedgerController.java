package com.erp.sap_mock_service.controller;

import com.erp.sap_mock_service.dto.GeneralLedgerRequest;
import com.erp.sap_mock_service.dto.GeneralLedgerResponse;
import com.erp.sap_mock_service.model.GeneralLedger;
import com.erp.sap_mock_service.service.GeneralLedgerService;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://YOUR-VERCEL-PROJECT.vercel.app"
})
@RestController
@RequestMapping("/api/v1/general-ledger")
@Tag(name = "General Ledger", description = "General Ledger Management APIs")
public class GeneralLedgerController {

    private final GeneralLedgerService service;

    public GeneralLedgerController(GeneralLedgerService service) {
        this.service = service;
    }

    // GET all entries
    @Operation(summary = "Get all General Ledger entries")
    @GetMapping
    public List<GeneralLedger> getAllEntries() {
        return service.getAllEntries();
    }

    // POST new entry
    @Operation(summary = "Create a new General Ledger entry")
   @PostMapping
public GeneralLedgerResponse createEntry(
       @Valid @RequestBody GeneralLedgerRequest request){

    return service.save(request);
}
    // GET by Company Code
    @Operation(summary = "Get General Ledger entries by Company Code")
    @GetMapping("/company/{companyCode}")
    public List<GeneralLedger> getByCompany(
            @PathVariable String companyCode) {

        return service.getByCompany(companyCode);
    }

    // GET by Fiscal Year
    @Operation(summary = "Get General Ledger entries by Fiscal Year")
    @GetMapping("/fiscal-year/{year}")
    public List<GeneralLedger> getByFiscalYear(
            @PathVariable String year) {

        return service.getByFiscalYear(year);
    }

    // GET by Document ID
    @Operation(summary = "Get General Ledger entry by Document ID")
    @GetMapping("/document/{documentId}")
    public GeneralLedger getByDocument(
            @PathVariable String documentId) {

        return service.getByDocument(documentId);
    }
   @Operation(summary = "Update Ledger Entry") 
@PutMapping("/{documentId}")
public GeneralLedger updateEntry(
        @PathVariable String documentId,
        @RequestBody GeneralLedger ledger) {

    return service.updateEntry(documentId, ledger);
}

@Operation(summary = "Delete Ledger Entry")
@DeleteMapping("/{documentId}")
public String deleteEntry(
        @PathVariable String documentId) {

    service.deleteEntry(documentId);
    return "Document deleted successfully";
}

@Operation(summary = "Search General Ledger entries by GL Account")
@GetMapping("/search")
public List<GeneralLedger> searchByGlAccount(
        @RequestParam String glAccount){

    return service.getByGlAccount(glAccount);
}

@Operation(summary = "Get General Ledger entries within an amount range")
@GetMapping("/amount-range")
public List<GeneralLedger> getAmountRange(

        @RequestParam Double min,

        @RequestParam Double max){

    return service.getByAmountRange(min,max);
}

@Operation(summary = "Get General Ledger entries by Company Code and Fiscal Year")
@GetMapping("/company/{companyCode}/year/{year}")
public List<GeneralLedger> getCompanyAndYear(

        @PathVariable String companyCode,

        @PathVariable String year){

    return service.getByCompanyAndYear(companyCode,year);
}

@Operation(summary = "Get Ledger Entries with Pagination")
@GetMapping("/paged")
public Page<GeneralLedger> getPaginatedEntries(

        @RequestParam(defaultValue = "0") int page,

        @RequestParam(defaultValue = "5") int size,

        @RequestParam(defaultValue = "documentId") String sortBy){

    return service.getPaginatedEntries(
            page,
            size,
            sortBy);
}

}