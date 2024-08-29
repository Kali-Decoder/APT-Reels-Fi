"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import "@aptos-labs/wallet-adapter-ant-design/dist/index.css";
import DataContextProvider from "@/context/DataContext";

import toast, { Toaster } from "react-hot-toast";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const wallets = [new PetraWallet()];
  return (
    <html lang="en">
        <Toaster position="top-right" reverseOrder={false} />
      <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
      <body> <DataContextProvider>{children}</DataContextProvider></body>
      </AptosWalletAdapterProvider>
    </html>
  );
}
