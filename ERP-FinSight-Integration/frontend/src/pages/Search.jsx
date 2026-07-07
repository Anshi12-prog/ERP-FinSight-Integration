import { useState } from "react";

import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Stack,
  Snackbar,
  Alert,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";
import LedgerTable from "../components/LedgerTable";
import api from "../services/api";

export default function Search() {

  const [glAccount, setGlAccount] = useState("");
  const [companyCode, setCompanyCode] = useState("");
  const [fiscalYear, setFiscalYear] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const search = async () => {

    setLoading(true);

    try {

      let response;

      if (glAccount !== "") {

        response = await api.get(
          `/general-ledger/search?glAccount=${glAccount}`
        );

      } else if (companyCode !== "" && fiscalYear !== "") {

        response = await api.get(
          `/general-ledger/company/${companyCode}/year/${fiscalYear}`
        );

      } else if (companyCode !== "") {

        response = await api.get(
          `/general-ledger/company/${companyCode}`
        );

      } else if (fiscalYear !== "") {

        response = await api.get(
          `/general-ledger/fiscal-year/${fiscalYear}`
        );

      } else if (min !== "" && max !== "") {

        response = await api.get(
          `/general-ledger/amount-range?min=${min}&max=${max}`
        );

      } else {

        response = await api.get("/general-ledger");

      }

      setRows(response.data);

      setOpenSnackbar(true);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  const resetFilters = () => {

    setGlAccount("");
    setCompanyCode("");
    setFiscalYear("");
    setMin("");
    setMax("");

    setRows([]);

  };

  return (

    <MainLayout>

      <Navbar />

      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 3 }}
      >
        Search General Ledger
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
          mb: 4,
        }}
      >

        <Grid container spacing={3}>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="GL Account"
              value={glAccount}
              onChange={(e) => setGlAccount(e.target.value)}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Company Code"
              value={companyCode}
              onChange={(e) => setCompanyCode(e.target.value)}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <TextField
              fullWidth
              label="Fiscal Year"
              value={fiscalYear}
              onChange={(e) => setFiscalYear(e.target.value)}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="number"
              label="Minimum Amount"
              value={min}
              onChange={(e) => setMin(e.target.value)}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              fullWidth
              type="number"
              label="Maximum Amount"
              value={max}
              onChange={(e) => setMax(e.target.value)}
            />
          </Grid>

          <Grid size={{ xs: 12 }}>

            <Stack
              direction="row"
              spacing={2}
            >

              <Button
                variant="contained"
                startIcon={<SearchIcon />}
                onClick={search}
              >
                Search
              </Button>

              <Button
                variant="outlined"
                color="secondary"
                startIcon={<RestartAltIcon />}
                onClick={resetFilters}
              >
                Reset Filters
              </Button>

            </Stack>

          </Grid>

        </Grid>

      </Paper>

      <Box>

        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 2 }}
        >
          Search Results
        </Typography>

        <LedgerTable
          rows={rows}
          loading={loading}
          onDelete={() => {}}
        />

      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >

        <Alert
          severity="success"
          variant="filled"
        >
          Search completed successfully.
        </Alert>

      </Snackbar>

    </MainLayout>

  );

}