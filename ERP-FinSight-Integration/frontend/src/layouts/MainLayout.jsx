import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div
        style={{
          marginLeft: "270px",
          padding: "30px",
          width: "100%",
          background: "#f5f7fb",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </div>
  );
}