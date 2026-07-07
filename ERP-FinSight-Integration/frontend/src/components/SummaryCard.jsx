import { Card, CardContent, Typography } from "@mui/material";

export default function SummaryCard({ title, value }) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        backgroundColor: "#1976d2",
        color: "white",
        boxShadow: 4,
      }}
    >
      <CardContent>
        <Typography variant="subtitle1">
          {title}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            mt: 1,
            fontWeight: "bold",
          }}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}