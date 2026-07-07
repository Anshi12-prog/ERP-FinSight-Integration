import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";

import {
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function LedgerTable({
  rows = [],
  loading = false,
  onDelete,
}) {

  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        field: "documentId",
        headerName: "Document ID",
        flex: 1,
      },
      {
        field: "companyCode",
        headerName: "Company Code",
        flex: 1,
      },
      {
        field: "glAccount",
        headerName: "GL Account",
        flex: 1,
      },
      {
        field: "amount",
        headerName: "Amount",
        flex: 1,
        renderCell: (params) => `₹ ${params.value}`,
      },
      {
        field: "currency",
        headerName: "Currency",
        flex: 1,
      },
      {
        field: "fiscalYear",
        headerName: "Fiscal Year",
        flex: 1,
      },
      {
        field: "actions",
        headerName: "Actions",
        width: 140,
        sortable: false,
        renderCell: (params) => (
          <>
            <Tooltip title="Edit">
              <IconButton
                color="primary"
                onClick={() =>
                  navigate(`/edit-ledger/${params.row.documentId}`)
                }
              >
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete">
              <IconButton
                color="error"
                onClick={() => onDelete(params.row.documentId)}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </>
        ),
      },
    ],
    [navigate, onDelete]
  );

  return (
    <Box
      sx={{
        height: 600,
        width: "100%",
        mt: 2,
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        getRowId={(row) => row.documentId}
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
              page: 0,
            },
          },
        }}
        disableRowSelectionOnClick
      />
    </Box>
  );
}