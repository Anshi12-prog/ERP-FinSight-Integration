import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import GeneralLedger from "./pages/GeneralLedger";
import AddLedger from "./pages/AddLedger";
import EditLedger from "./pages/EditLedger";
import FinancialSummary from "./pages/FinancialSummary";
import Search from "./pages/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/ledger" element={<GeneralLedger />} />
      <Route path="/add-ledger" element={<AddLedger />} />
      <Route path="/edit-ledger/:documentId" element={<EditLedger />} />
      <Route path="/summary" element={<FinancialSummary />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

export default App;