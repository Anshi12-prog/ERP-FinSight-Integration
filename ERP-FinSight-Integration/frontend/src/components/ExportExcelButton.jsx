import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";

export default function ExportExcelButton({ data }) {

  const exportExcel = () => {

    const worksheet = XLSX.utils.json_to_sheet(data);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "General Ledger"
    );

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const file = new Blob(
      [excelBuffer],
      {
        type:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
      }
    );

    saveAs(file, "General_Ledger.xlsx");

  };

  return (
    <Button
      variant="contained"
      color="success"
      startIcon={<DownloadIcon />}
      onClick={exportExcel}
    >
      Export Excel
    </Button>
  );
}