# ERP FinSight Integration

## Overview

ERP FinSight Integration is a full-stack financial management system developed using React, Spring Boot, and PostgreSQL. The application simulates an ERP General Ledger module by allowing users to manage ledger entries, perform financial analysis, search records using multiple filters, and generate reports in Excel and PDF formats.

The project follows a layered architecture and exposes RESTful APIs documented using Swagger.

---

## Features

* Dashboard with Financial Overview
* General Ledger Management
* Create Ledger Entries
* Update Ledger Entries
* Delete Ledger Entries
* Search using:

  * Company Code
  * Fiscal Year
  * GL Account
  * Amount Range
* Financial Summary
* Interactive Charts
* Excel Report Export
* PDF Report Export
* Swagger API Documentation
* Docker Support
* PostgreSQL Integration
* Responsive Material UI Interface

---

## Tech Stack

### Frontend

* React.js
* Material UI
* Axios
* Recharts

### Backend

* Spring Boot
* Spring Data JPA
* Hibernate
* REST API

### Database

* PostgreSQL

### Documentation

* Swagger / OpenAPI

### Build Tools

* Maven
* Vite

### Version Control

* Git
* GitHub

---

## Project Structure

frontend/

* pages
* components
* layouts
* services

backend/

* controller
* service
* repository
* model
* dto
* config
* exception

---

## API Endpoints

General Ledger

GET /api/v1/general-ledger

POST /api/v1/general-ledger

PUT /api/v1/general-ledger/{documentId}

DELETE /api/v1/general-ledger/{documentId}

GET /api/v1/general-ledger/search

GET /api/v1/general-ledger/company/{companyCode}

GET /api/v1/general-ledger/fiscal-year/{year}

GET /api/v1/general-ledger/company/{companyCode}/year/{year}

GET /api/v1/general-ledger/amount-range

GET /api/v1/general-ledger/paged

Financial Summary

GET /api/v1/finsight/summary

---

## Installation

### Clone Repository

git clone <repository-url>

### Backend

cd sap-mock-service

mvn spring-boot:run

### Frontend

cd frontend

npm install

npm run dev

---

## Database

PostgreSQL

Database Name:
erp_finsight

Configure database credentials in:

application.properties

---

## Swagger

http://localhost:8080/swagger-ui/index.html

---

## Future Scope

* Authentication & Authorization
* SAP ERP Integration
* Role-Based Access Control
* Audit Logs
* Advanced Analytics Dashboard
* Cloud Deployment

---

## Developed By

Anshika 

B.Tech 

Guru Tegh Bahadur Institute of Technology
