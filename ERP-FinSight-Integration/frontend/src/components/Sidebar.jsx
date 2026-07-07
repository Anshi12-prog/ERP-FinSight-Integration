import { Link, useLocation } from "react-router-dom";

import {
  Dashboard,
  AccountBalance,
  AddCircle,
  Search,
  Assessment,
} from "@mui/icons-material";

export default function Sidebar() {

  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      path: "/",
      icon: <Dashboard />,
    },
    {
      name: "General Ledger",
      path: "/ledger",
      icon: <AccountBalance />,
    },
    {
      name: "Add Ledger",
      path: "/add-ledger",
      icon: <AddCircle />,
    },
    {
      name: "Search",
      path: "/search",
      icon: <Search />,
    },
    {
      name: "Financial Summary",
      path: "/summary",
      icon: <Assessment />,
    },
  ];

  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#0F172A",
        color: "white",
        position: "fixed",
        left: 0,
        top: 0,
        padding: "25px",
        boxSizing: "border-box",
        boxShadow: "4px 0 15px rgba(0,0,0,0.15)",
      }}
    >
      <h2
        style={{
          marginBottom: "40px",
          textAlign: "center",
          color: "#60A5FA",
          letterSpacing: "1px",
        }}
      >
        ERP FinSight
      </h2>

      {menu.map((item) => (

        <Link
          key={item.path}
          to={item.path}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            padding: "14px 18px",
            marginBottom: "12px",
            borderRadius: "10px",
            textDecoration: "none",
            color: "white",
            background:
              location.pathname === item.path
                ? "#2563EB"
                : "transparent",
            transition: "0.3s",
            fontWeight: 500,
          }}
        >
          {item.icon}

          {item.name}

        </Link>

      ))}

      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "25px",
          color: "#94A3B8",
          fontSize: "13px",
        }}
      >
        Version 1.0
      </div>

    </div>
  );
}

