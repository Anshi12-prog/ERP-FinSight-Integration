import { useEffect, useState } from "react";

import {
  Grid,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";

import DescriptionIcon from "@mui/icons-material/Description";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";
import DashboardCard from "../components/DashboardCard";
import FinancialCharts from "../components/FinancialCharts";
import api from "../services/api";

export default function FinancialSummary() {

  const [summary, setSummary] = useState({
    totalDocuments: 0,
    totalAmount: 0,
    averageAmount: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSummary();
  }, []);

  const loadSummary = async () => {

    try {

      const response = await api.get("/finsight/summary");

      setSummary(response.data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return (

      <MainLayout>

        <Navbar />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 10,
          }}
        >
          <CircularProgress />
        </Box>

      </MainLayout>

    );

  }

  return (

    <MainLayout>

      <Navbar />

      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 4 }}
      >
        Financial Summary
      </Typography>

      <Grid container spacing={3}>

        <Grid size={{ xs: 12, md: 4 }}>
          <DashboardCard
            title="Total Documents"
            value={summary.totalDocuments}
            icon={<DescriptionIcon fontSize="large" />}
            color="linear-gradient(135deg,#2563EB,#60A5FA)"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <DashboardCard
            title="Total Amount"
            value={`₹ ${Number(summary.totalAmount).toLocaleString()}`}
            icon={<CurrencyRupeeIcon fontSize="large" />}
            color="linear-gradient(135deg,#059669,#34D399)"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <DashboardCard
            title="Average Amount"
            value={`₹ ${Number(summary.averageAmount).toFixed(2)}`}
            icon={<TrendingUpIcon fontSize="large" />}
            color="linear-gradient(135deg,#EA580C,#FB923C)"
          />
        </Grid>

      </Grid>

      <Box sx={{ mt: 5 }}>

        <FinancialCharts summary={summary} />

      </Box>

    </MainLayout>

  );

}