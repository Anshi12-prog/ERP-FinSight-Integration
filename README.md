# 🚀 ERP FinSight Integration

A Full-Stack ERP Financial Management System built using **React.js**, **Spring Boot**, and **PostgreSQL**. The application simulates an ERP General Ledger module, enabling users to manage financial records, search ledger entries, generate reports, and visualize financial insights through an interactive dashboard.

---

## 📌 Project Overview

ERP FinSight Integration is designed to simplify financial record management by providing an intuitive web interface backed by a robust RESTful API. The system allows users to create, update, delete, search, and analyze General Ledger records while offering report generation in Excel and PDF formats.

---

## ✨ Features

* 📊 Interactive Dashboard
* 📒 General Ledger Management (CRUD)
* ➕ Add Ledger Entries
* ✏️ Edit Existing Entries
* 🗑️ Delete Ledger Entries
* 🔍 Advanced Search & Filters

  * Company Code
  * Fiscal Year
  * GL Account
  * Amount Range
* 📈 Financial Summary Dashboard
* 📊 Interactive Charts & Analytics
* 📄 Export Reports as PDF
* 📑 Export Reports as Excel
* 📚 Swagger API Documentation
* 🐳 Docker Support
* 📱 Responsive Material UI Interface

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Vite
* Material UI (MUI)
* Axios
* Recharts

## Backend

* Spring Boot
* Spring Data JPA
* Hibernate
* REST APIs
* Maven

## Database

* PostgreSQL

## Documentation

* Swagger / OpenAPI

## DevOps

* Docker
* Docker Compose

## Version Control

* Git
* GitHub

---

# 📂 Project Structure

```
ERP-FinSight-Integration
│
├── frontend
│   ├── src
│   │   ├── pages
│   │   ├── components
│   │   ├── layouts
│   │   ├── services
│   │   └── assets
│   └── package.json
│
├── backend
│   └── sap-mock-service
│       ├── controller
│       ├── service
│       ├── repository
│       ├── model
│       ├── dto
│       ├── util
│       ├── exception
│       └── config
│
├── monitoring
│
├── docker-compose.yml
│
└── README.md
```

---

# 📡 REST API Endpoints

## General Ledger APIs

| Method | Endpoint                                                   | Description               |
| ------ | ---------------------------------------------------------- | ------------------------- |
| GET    | `/api/v1/general-ledger`                                   | Get all ledger entries    |
| POST   | `/api/v1/general-ledger`                                   | Create a new ledger entry |
| PUT    | `/api/v1/general-ledger/{documentId}`                      | Update ledger             |
| DELETE | `/api/v1/general-ledger/{documentId}`                      | Delete ledger             |
| GET    | `/api/v1/general-ledger/search`                            | Search by GL Account      |
| GET    | `/api/v1/general-ledger/company/{companyCode}`             | Filter by Company Code    |
| GET    | `/api/v1/general-ledger/fiscal-year/{year}`                | Filter by Fiscal Year     |
| GET    | `/api/v1/general-ledger/company/{companyCode}/year/{year}` | Company & Fiscal Year     |
| GET    | `/api/v1/general-ledger/amount-range`                      | Search by Amount Range    |
| GET    | `/api/v1/general-ledger/paged`                             | Pagination                |

---

## Financial Summary API

| Method | Endpoint                   | Description                 |
| ------ | -------------------------- | --------------------------- |
| GET    | `/api/v1/finsight/summary` | Financial Dashboard Summary |

---

# 🗄️ Database Schema

**General Ledger**

| Column      | Type                 |
| ----------- | -------------------- |
| documentId  | String (Primary Key) |
| companyCode | String               |
| fiscalYear  | String               |
| glAccount   | String               |
| amount      | Double               |
| currency    | String               |

---

# 🏗️ System Architecture

```
React + Material UI
        │
     Axios
        │
REST API Calls
        │
Spring Boot
        │
Service Layer
        │
Spring Data JPA
        │
PostgreSQL Database
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Anshi12-prog/ERP-FinSight-Integration.git
```

## Backend

```bash
cd backend/sap-mock-service
mvn spring-boot:run
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 📚 Swagger API Documentation

```
http://localhost:8080/swagger-ui/index.html
```

---

# 📸 Project Screenshots

Add screenshots of:

* Dashboard
* General Ledger
* Add Ledger
* Search
* Financial Summary
* Swagger UI

---

# 🔮 Future Scope

* User Authentication & Authorization
* Role-Based Access Control (RBAC)
* SAP ERP Integration
* Cloud Deployment
* AI-Based Financial Insights
* Audit Logging
* Email Report Generation

---

# 👩‍💻 Developed By

**Anshika Singh**

B.Tech Computer Science & Engineering

Guru Tegh Bahadur Institute of Technology (GTBIT)

---

# ⭐ If you found this project useful

Give this repository a ⭐ on GitHub.

