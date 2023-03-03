import React from "react";
import Header from "./Header";
import { Box } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Admin from "./Admin";
import Claim from "./Claim";
import Vote from "./Vote";

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
      <Box sx={{ flex: 1 }}>
        <BrowserRouter>
          <Routes>
            <Route path={"/admin"} element={<Admin />} />
            <Route path={"/vote"} element={<Vote />} />
            <Route path={"/claim"} element={<Claim />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  );
}

export default App;
