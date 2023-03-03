import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        background: "#1D2C3F",
      }}
    >
      <Header />
      <Box sx={{ flex: 1 }}></Box>
    </Box>
  );
}

export default App;
