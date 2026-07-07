import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  Chip,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function Navbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <AppBar
      position="static"
      elevation={2}
      sx={{
        backgroundColor: "#fff",
        color: "#1e293b",
        borderRadius: 2,
        mb: 4,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight="bold">
            ERP FinSight
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Financial Management Dashboard
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Chip
            icon={<CalendarMonthIcon />}
            label={today}
            color="primary"
            variant="outlined"
          />

          <Avatar sx={{ bgcolor: "#1976d2" }}>
            <PersonIcon />
          </Avatar>

          <Box>
            <Typography fontWeight="bold">
              Welcome, Admin
            </Typography>

            <Typography variant="body2" color="text.secondary">
              ERP User
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}