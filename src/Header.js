import React from "react";
import { Box, Typography } from "@mui/material";
import ConnectWallet from "./ConnectWallet";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "24px 0px",
        background: "#151E2B",
        width: "100%",
      }}
    >
      <Typography variant="h5" sx={{ ml: 3, color: "#fff", fontWeight: 600 }}>
        PanDAO
      </Typography>

      <ConnectWallet />
    </Box>
  );
};

export default Header;
