import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

export default function DashboardCard({
  title,
  value,
  icon = null,
  color = "linear-gradient(135deg,#1976d2,#42a5f5)",
}) {
  return (
    <Card
      sx={{
        backgroundImage: color,
        color: "white",
        borderRadius: 4,
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
        },
      }}
    >
      <CardContent>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>

          {icon}
        </Box>

        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{ mt: 3 }}
        >
          {value}
        </Typography>

      </CardContent>
    </Card>
  );
}