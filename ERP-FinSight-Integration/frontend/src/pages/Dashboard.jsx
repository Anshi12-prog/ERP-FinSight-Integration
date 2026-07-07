import { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";

import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";
import DashboardCard from "../components/DashboardCard";
import api from "../services/api";
import FinancialCharts from "../components/FinancialCharts";
import DescriptionIcon from "@mui/icons-material/Description";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
export default function Dashboard() {

    const [summary, setSummary] = useState({
        totalDocuments: 0,
        totalAmount: 0,
        averageAmount: 0,
    });

    useEffect(() => {
        fetchSummary();
    }, []);

    const fetchSummary = async () => {
        try {
            const response = await api.get("/finsight/summary");
            setSummary(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <MainLayout>

            <Navbar />

            <Typography
                variant="h4"
                sx={{ mb: 4 }}
            >
                ERP Financial Dashboard
            </Typography>

            <Grid size={{ xs: 12, md: 4 }}>

    <DashboardCard

        title="Total Documents"

        value={summary.totalDocuments}

        icon={<DescriptionIcon fontSize="large" />}

        color="linear-gradient(135deg,#2563eb,#3b82f6)"

    />

</Grid>

<Grid size={{ xs: 12, md: 4 }}>

    <DashboardCard

        title="Total Amount"

        value={`₹ ${summary.totalAmount}`}

        icon={<CurrencyRupeeIcon fontSize="large" />}

        color="linear-gradient(135deg,#059669,#10b981)"

    />

</Grid>

<Grid size={{ xs: 12, md: 4 }}>

    <DashboardCard

        title="Average Amount"

        value={`₹ ${summary.averageAmount}`}

        icon={<TrendingUpIcon fontSize="large" />}

        color="linear-gradient(135deg,#ea580c,#f97316)"

    />

</Grid>
                 

            <FinancialCharts summary={summary} />

        </MainLayout>
    );
}