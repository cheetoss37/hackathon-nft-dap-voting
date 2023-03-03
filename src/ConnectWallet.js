import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useAuthContext } from "./AuthContext";

const ConnectWallet = () => {
  const { walletAddress, handleLogout, handleConnectPhantom } =
    useAuthContext();

  return (
    <>
      {walletAddress ? (
        <Box
          sx={{
            mr: 3,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              padding: "12px 24px",
              borderRadius: 80,
              background: "#2D3B4D",
              mr: 2,
            }}
          >
            {walletAddress.substring(0, 4)}...
            {walletAddress.substring(walletAddress.length - 4)}
          </Typography>
          <Button
            variant="contained"
            onClick={() => handleLogout()}
            sx={{
              fontSize: 16,
              textTransform: "none",
              background: "rgb(44, 140, 255)",
              width: 120,
              height: 48,
              padding: "12px 27px",
              fontWeight: 600,
              borderRadius: 80,
            }}
          >
            Logout
          </Button>
        </Box>
      ) : (
        <Button
          variant="contained"
          onClick={() => handleConnectPhantom()}
          sx={{
            fontSize: 16,
            textTransform: "none",
            background: "rgb(44, 140, 255)",
            width: 180,
            height: 48,
            padding: "12px 27px",
            fontWeight: 600,
            borderRadius: 80,
            mr: 3,
          }}
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
};

export default ConnectWallet;
