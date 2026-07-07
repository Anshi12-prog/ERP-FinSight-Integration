import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import Button from "@mui/material/Button";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export default function ExportPDFButton({ data }) {

  const exportPDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("ERP Financial Ledger Report", 14, 18);

    autoTable(doc, {
      startY: 30,
      head: [[
        "Document ID",
        "Company",
        "GL Account",
        "Amount",
        "Currency",
        "Fiscal Year"
      ]],
      body: data.map((row) => [
        row.documentId,
        row.companyCode,
        row.glAccount,
        row.amount,
        row.currency,
        row.fiscalYear
      ]),
    });

    doc.save("General_Ledger_Report.pdf");
  };

  return (
    <Button
      variant="contained"
      color="error"
      startIcon={<PictureAsPdfIcon />}
      onClick={exportPDF}
    >
      Export PDF
    </Button>
  );
}