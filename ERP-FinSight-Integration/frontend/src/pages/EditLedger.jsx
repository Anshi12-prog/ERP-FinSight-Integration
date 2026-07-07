import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";

import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";
import api from "../services/api";

export default function EditLedger() {

  const { documentId } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);

  const [ledger, setLedger] = useState({
    documentId: "",
    companyCode: "",
    fiscalYear: "",
    glAccount: "",
    amount: "",
    currency: "",
  });

  useEffect(() => {
    fetchLedger();
  }, []);

  const fetchLedger = async () => {

    try {

      const response = await api.get(
        `/general-ledger/document/${documentId}`
      );

      setLedger(response.data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  const handleChange = (e) => {

    setLedger({
      ...ledger,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await api.put(
        `/general-ledger/${documentId}`,
        ledger
      );

      setOpen(true);

      setTimeout(() => {

        navigate("/ledger");

      }, 1200);

    } catch (error) {

      console.error(error);

    }

  };

  if (loading) {

    return (

      <MainLayout>

        <Navbar />

        <CircularProgress />

      </MainLayout>

    );

  }
    return (
    <MainLayout>
      <Navbar />

      <Paper
        elevation={3}
        sx={{
          maxWidth: 700,
          mx: "auto",
          mt: 3,
          p: 4,
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 3 }}
        >
          Edit Ledger Entry
        </Typography>

        <form onSubmit={handleSubmit}>

          <Grid container spacing={3}>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Document ID"
                name="documentId"
                value={ledger.documentId}
                disabled
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Company Code"
                name="companyCode"
                value={ledger.companyCode}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Fiscal Year"
                name="fiscalYear"
                value={ledger.fiscalYear}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="GL Account"
                name="glAccount"
                value={ledger.glAccount}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                type="number"
                label="Amount"
                name="amount"
                value={ledger.amount}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Currency"
                name="currency"
                value={ledger.currency}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
              >
                Update Ledger
              </Button>
            </Grid>

          </Grid>

        </form>
      </Paper>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success" variant="filled">
          Ledger updated successfully!
        </Alert>
      </Snackbar>

    </MainLayout>
  );

}
