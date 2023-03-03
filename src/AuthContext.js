import React, { memo, useContext, createContext, useState } from "react";

export const AuthContext = createContext(null);
export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState("");

  const handleConnectPhantom = async () => {
    const phantomProvider = window?.solana;

    if (!phantomProvider) {
      alert("Please install Phantom wallet extensions");
      return;
    }

    try {
      await phantomProvider.connect();

      const account = phantomProvider.publicKey.toString();
      setWalletAddress(account);
    } catch (err) {
      if (err.code === 4001) {
        alert("User reject connection");
      }

      await phantomProvider.disconnect();
    }
  };

  const handleLogout = async () => {
    try {
      const phantomProvider = window.solana;
      await phantomProvider.disconnect();
      setWalletAddress("");
    } catch (err) {
      setWalletAddress("");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        handleConnectPhantom: handleConnectPhantom,
        handleLogout: handleLogout,
        walletAddress: walletAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default memo(AuthProvider);
