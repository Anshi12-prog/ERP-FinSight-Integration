package com.erp.sap_mock_service.service;

import com.erp.sap_mock_service.model.GeneralLedger;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;

import java.util.List;

@Service
public class SapIntegrationService {

    private final RestTemplate restTemplate;

    public SapIntegrationService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<GeneralLedger> fetchGeneralLedgerFromSAP() {

        String url = "http://localhost:8080/mock/sap/general-ledger";

        ResponseEntity<List<GeneralLedger>> response =
                restTemplate.exchange(
                        url,
                        HttpMethod.GET,
                        null,
                        new ParameterizedTypeReference<List<GeneralLedger>>() {}
                );

        return response.getBody();
    }

}
