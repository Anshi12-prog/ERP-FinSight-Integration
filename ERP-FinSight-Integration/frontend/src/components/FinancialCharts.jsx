import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

import { Grid, Paper, Typography } from "@mui/material";

const COLORS = ["#1976d2", "#43a047", "#fb8c00"];

export default function FinancialCharts({ summary }) {

  const pieData = [
    {
      name: "Documents",
      value: summary.totalDocuments,
    },
    {
      name: "Average Amount",
      value: summary.averageAmount,
    },
    {
      name: "Total Amount",
      value: summary.totalAmount,
    },
  ];

  const barData = [
    {
      name: "Financial Overview",
      Documents: summary.totalDocuments,
      Average: summary.averageAmount,
      Total: summary.totalAmount,
    },
  ];

  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>

      <Grid size={{ xs: 12, md: 6 }}>
        <Paper sx={{ p: 3 }}>

          <Typography variant="h6" gutterBottom>
            Financial Distribution
          </Typography>

          <ResponsiveContainer width="100%" height={320}>
            <PieChart>

              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={110}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />

            </PieChart>
          </ResponsiveContainer>

        </Paper>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Paper sx={{ p: 3 }}>

          <Typography variant="h6" gutterBottom>
            Financial Overview
          </Typography>

          <ResponsiveContainer width="100%" height={320}>

            <BarChart data={barData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="name" />

              <YAxis />

              <Tooltip />

              <Legend />

              <Bar dataKey="Documents" fill="#1976d2" />

              <Bar dataKey="Average" fill="#43a047" />

              <Bar dataKey="Total" fill="#fb8c00" />

            </BarChart>

          </ResponsiveContainer>

        </Paper>
      </Grid>

    </Grid>
  );
}