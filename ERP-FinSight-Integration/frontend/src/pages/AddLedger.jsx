import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Paper,
  TextField,
  Typography,
  Button,
  Stack,
  MenuItem
} from "@mui/material";

import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";
import api from "../services/api";

export default function AddLedger() {

  const navigate = useNavigate();
  const { documentId } = useParams();

  const isEdit = Boolean(documentId);

  const [ledger, setLedger] = useState({
    documentId: "",
    companyCode: "",
    glAccount: "",
    amount: "",
    fiscalYear: "",
    currency: "INR"
  });

  useEffect(() => {

    if (isEdit) {
      fetchLedger();
    }

  }, []);

  const fetchLedger = async () => {

    try {

      const response = await api.get(
        `/general-ledger/document/${documentId}`
      );

      setLedger(response.data);

    } catch (err) {

      console.error(err);
      alert("Unable to fetch ledger.");

    }

  };

  const handleChange = (e) => {

    setLedger({
      ...ledger,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      if (isEdit) {

        await api.put(
          `/general-ledger/${documentId}`,
          ledger
        );

        alert("Ledger Updated Successfully!");

      } else {

        await api.post(
          "/general-ledger",
          ledger
        );

        alert("Ledger Added Successfully!");

      }

      navigate("/ledger");

    } catch (err) {

      console.log(err.response?.data);
      console.error(err);

      alert("Something went wrong!");

    }

  };

  return (

    <MainLayout>

      <Navbar />

      <Paper
        elevation={4}
        sx={{
          maxWidth: 700,
          mx: "auto",
          mt: 4,
          p: 4,
          borderRadius: 3
        }}
      >

        <Typography
          variant="h4"
          sx={{
            mb: 4,
            fontWeight: "bold"
          }}
        >
          {isEdit ? "Edit Ledger" : "Add General Ledger"}
        </Typography>

        <form onSubmit={handleSubmit}>

          <Stack spacing={3}>

            <TextField
              label="Document ID"
              name="documentId"
              value={ledger.documentId}
              onChange={handleChange}
              fullWidth
              required
              disabled={isEdit}
            />

            <TextField
              label="Company Code"
              name="companyCode"
              value={ledger.companyCode}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="GL Account"
              name="glAccount"
              value={ledger.glAccount}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Amount"
              name="amount"
              type="number"
              value={ledger.amount}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Fiscal Year"
              name="fiscalYear"
              value={ledger.fiscalYear}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              select
              label="Currency"
              name="currency"
              value={ledger.currency}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="INR">INR</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="GBP">GBP</MenuItem>
            </TextField>

            <Button
              type="submit"
              variant="contained"
              size="large"
            >
              {isEdit ? "Update Ledger" : "Save Ledger"}
            </Button>

            <Button
              variant="outlined"
              onClick={() => navigate("/ledger")}
            >
              Back to Ledger
            </Button>

          </Stack>

        </form>

      </Paper>

    </MainLayout>

  );

}