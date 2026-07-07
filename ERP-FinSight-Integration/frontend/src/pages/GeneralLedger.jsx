import { useEffect, useState } from "react";

import {
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";
import LedgerTable from "../components/LedgerTable";
import ExportExcelButton from "../components/ExportExcelButton";
import ExportPDFButton from "../components/ExportPDFButton";
import api from "../services/api";

export default function GeneralLedger() {

  const navigate = useNavigate();

  const [ledgers, setLedgers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [openDialog, setOpenDialog] = useState(false);

  const [selectedId, setSelectedId] = useState("");

  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    fetchLedgers();
  }, []);

  const fetchLedgers = async () => {

    try {

      setLoading(true);

      const response = await api.get("/general-ledger");

      setLedgers(response.data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  const handleDeleteClick = (id) => {

    setSelectedId(id);

    setOpenDialog(true);

  };

  const confirmDelete = async () => {

    try {

      await api.delete(`/general-ledger/${selectedId}`);

      setOpenSnackbar(true);

      fetchLedgers();

    } catch (error) {

      console.error(error);

    }

    setOpenDialog(false);

  };

  return (

    <MainLayout>

      <Navbar />

      <Typography
        variant="h4"
        sx={{ mb: 3 }}
      >
        General Ledger
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 3,
          flexWrap: "wrap",
        }}
      >

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate("/add-ledger")}
        >
          Add Ledger
        </Button>

        <ExportExcelButton data={ledgers} />

        <ExportPDFButton data={ledgers} />

        <Button
          variant="outlined"
          onClick={fetchLedgers}
        >
          Refresh
        </Button>

      </Box>

      {loading ? (

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 8,
          }}
        >
          <CircularProgress />
        </Box>

      ) : (

        <LedgerTable
          rows={ledgers}
          loading={loading}
          onDelete={handleDeleteClick}
        />

      )}

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      >

        <DialogTitle>

          Delete Ledger Entry

        </DialogTitle>

        <DialogContent>

          <DialogContentText>

            Are you sure you want to delete this ledger entry?

          </DialogContentText>

        </DialogContent>

        <DialogActions>

          <Button
            onClick={() => setOpenDialog(false)}
          >
            Cancel
          </Button>

          <Button
            color="error"
            variant="contained"
            onClick={confirmDelete}
          >
            Delete
          </Button>

        </DialogActions>

      </Dialog>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >

        <Alert
          severity="success"
          variant="filled"
        >
          Ledger deleted successfully.
        </Alert>

      </Snackbar>

    </MainLayout>

  );

}