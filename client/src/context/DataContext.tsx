"use client";
import React, { useState, useEffect } from "react";
import {
  useWallet,
  InputTransactionData,
} from "@aptos-labs/wallet-adapter-react";
import toast from "react-hot-toast";
import { Provider, Network } from "aptos";


import { Aptos, AptosConfig,  } from "@aptos-labs/ts-sdk";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const DataContext = React.createContext();
const DataContextProvider = ({ children }) => {
  //   const aptosConfig = new AptosConfig({ network: Network.DEVNET });
  const provider = new Provider(Network.DEVNET);
    // const aptos = new Aptos(aptosConfig);
  const { account, signAndSubmitTransaction } = useWallet();
  const [tab, setTab] = useState("start");
  const [tokenBalance,setTokenBalance] = useState(0);

  const MODULE_ADDRESS =
    "0x25e6d86a5a7083d9d61e40381e5238ab6d2e785825eba0183cebb6009483dab4";
    const getTokenMetadata = async (hostAddress: string) => {
      if (!hostAddress) return;
      const functionType = "get_metadata";
      try {
        const todoListResource = await aptos.view({
          payload: {
            function: `${MODULE_ADDRESS}::${functionType}::reels_fi`,
            typeArguments: [],
            functionArguments: [],
          },
        });
        console.log(todoListResource, "todoListResource");
      } catch (e: any) {
        console.error(e, "error");
      }
    };

    const fetchAccountBalance = async () => {
      if (!account) return;
      try {
        const balanceResource = await provider.getAccountResource(
          account.address,
          `0x1::coin::CoinStore<${MODULE_ADDRESS}::reels_fi::FACoin>`
        );
        const balance = parseInt((balanceResource.data as any).coin.value, 10);
        setTokenBalance(balance / 100_000_000);
        
        console.log(tokenBalance);// Convert to APT
      } catch (error: any) {
        console.log(error);
      }
    };


  const mintTokens = async (toAddress: string, mintAmount: number) => {
    const mintPayload = {
      data: {
        function: `${MODULE_ADDRESS}::reels_fi::mint`,
        typeArguments: [],
        functionArguments: [toAddress, mintAmount],
      },
    };
    try {
      let id = toast.loading("Investing Tokens...");

      await delay(1000);
      // sign and submit transaction to chain
      const response = await signAndSubmitTransaction(mintPayload);
      // wait for transaction
      await provider.waitForTransaction(response.hash);
      toast.success("Invested Successfully !!!", { id });
    } catch (error: any) {
      console.log(error);
      toast.error("Investment Failed !!!");
    }
  };
  const transferTokens = async (fromAddress, toAddress, transferAmount) => {
    let id = toast.loading("Claiming Tokens...");
    const transferPayload = {
      data: {
        function: `${MODULE_ADDRESS}::reels_fi::transfer`, // Update this with the correct module and function name
        typeArguments: [], // Add any type arguments if needed
        functionArguments: [fromAddress, toAddress, transferAmount],
      },
    };

    try {
      // Sign and submit the transaction to the chain
      const response = await signAndSubmitTransaction(transferPayload);

      // Wait for the transaction to be confirmed
      await provider.waitForTransaction(response.hash);
      toast.success("Claimed Successfully !!!", { id });
      console.log("Transfer successful");
    } catch (error) {
      console.log("Transfer failed", error);
      toast.error("Claiming Failed !!!");
    }
  };
  const depositTokens = async (toAddress, fungibleAsset) => {
    const depositPayload = {
      data: {
        function: `${MODULE_ADDRESS}::reels_fi::deposit`,
        typeArguments: [],
        functionArguments: [toAddress, fungibleAsset],
      },
    };

    try {
      // Sign and submit the transaction to the chain
      const response = await signAndSubmitTransaction(depositPayload);
      // Wait for the transaction to be confirmed
      await provider.waitForTransaction(response.hash);
      console.log("Deposit successful");
    } catch (error) {
      console.log("Deposit failed", error);
    }
  };
  return (
    <DataContext.Provider
      value={{
        // getTokenMetadata,
        mintTokens,
        transferTokens,
        depositTokens,
        setTab,tab
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => React.useContext(DataContext);
export default DataContextProvider;
