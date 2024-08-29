"use client";
import CreatorPage from "@/components/CreatorPage";
import Explore from "@/components/Explore";
import HomePage from "@/components/HomePage";
import Profile from "@/components/Profile";
import { useState } from "react";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import StartPage from "@/components/StartPage";
import { useDataContext } from "@/context/DataContext";
import UserDashboard from "@/components/UserDashboard";
export default function Home() {
  const  {setTab,tab} = useDataContext();
  return (
    <>
      <div className="flex justify-center items-center flex-col w-full bg-gray-900 text-white border-gray-700">
        <div className="container-glich mt-10">
          <p className="glitch text-white">
            <span aria-hidden="true">Reels-Fi</span>
            Reels-Fi
            <span aria-hidden="true">Reels-Fi</span>
          </p>
        </div>
        <div className="w-full">
          {tab === "home" && <HomePage />}
          {tab === "profile" && <Profile />}
          {tab === "explore" && <Explore />}
          {tab === "start" && <StartPage />}
          {tab === "user-dashboard" && <UserDashboard />}
        </div>
      </div>

      <section className="bottom-bar w-[100%] flex justify-between bg-gray-800 border-t border-gray-700 p-4">
      <button
          className={`flex items-center justify-center p-2 ${
            tab === "profile" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => setTab("start")}
        >
          <RiLoginCircleFill
            className={`text-white ${tab === "profile" ? "text-blue-500" : ""}`}
            size={24}
          />
        </button>
        <button
          className={`flex items-center justify-center p-2 ${
            tab === "home" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => setTab("home")}
        >
          <FaHome
            className={`text-white ${tab === "home" ? "text-blue-500" : ""}`}
            size={24}
          />
        </button>
        <button
          className={`flex items-center justify-center p-2 ${
            tab === "explore" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => setTab("explore")}
        >
          <FaSearch
            className={`text-white ${tab === "explore" ? "text-blue-500" : ""}`}
            size={24}
          />
        </button>
        <button
          className={`flex items-center justify-center p-2 ${
            tab === "profile" ? "border-b-2 border-white" : ""
          }`}
          onClick={() => setTab("profile")}
        >
          <FaUser
            className={`text-white ${tab === "profile" ? "text-blue-500" : ""}`}
            size={24}
          />
        </button>
        
      </section>
    </>
  );
}
