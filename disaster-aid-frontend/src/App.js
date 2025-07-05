import React, { useState, useEffect } from "react";
import { FaUser, FaWallet, FaHandsHelping, FaUserShield } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import RegisterCause from "./components/RegisterCause";
import Donate from "./components/Donate";
import Withdraw from "./components/Withdraw";
import PostUpdate from "./components/PostUpdate";
import CauseList from "./components/CauseList";
import DonationHistory from "./components/DonationHistory";
import VerifyNGO from "./components/VerifyNGO";
import "./App.css";

function App() {
  const [account, setAccount] = useState("");
  const [role, setRole] = useState(""); // 'ngo', 'donor', 'admin'

  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const [acc] = accounts;
      setAccount(acc);

      // OPTIONAL: Auto set role if address is admin
      if (acc.toLowerCase() === "0x963d8cef95393e3647091A07727a7D00C6E9Df2c".toLowerCase()) {
        setRole("admin");
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        setAccount(accounts[0] || "");
        if (accounts[0]?.toLowerCase() === "0x2947Bee8307B486Be0743754eBab34015f983051".toLowerCase()) {
          setRole("admin");
        }
      });
    }
  }, []);

  return (
    <div className="container">
      <div className="text-center my-8 animate-fade-in">
  <h1 className="text-5xl font-extrabold text-indigo-700 flex items-center justify-center gap-4">
    <FaHandsHelping className="text-yellow-500 animate-bounce" />
    <span className="bg-gradient-to-r from-indigo-700 to-purple-500 text-transparent bg-clip-text">
      Disaster Aid Tracker
    </span>
  </h1>
  <p className="text-gray-600 text-xl mt-4 tracking-wide flex justify-center items-center gap-3">
    
    Transparent Donations. Blockchain Verified.
  </p>
</div>

      <button className="connect-btn" onClick={connectWallet}>
        {account
          ? `✅ ${account.slice(0, 6)}...${account.slice(-4)}`
          : "🔌 Connect MetaMask"}
      </button>

      <div className="role-select">
        <label htmlFor="role">
          <FaUser /> I am a:
        </label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="ngo">NGO</option>
          <option value="donor">Donor</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <div className="card">
        {role === "admin" && (
          <>
            <VerifyNGO onRoleChange={(newRole) => setRole(newRole)} />
            <p><FaUserShield /> Admin Panel: You can now verify NGOs from the website.</p>
          </>
        )}

        {role === "ngo" && (
          <>
            <RegisterCause />
            <Withdraw />
            <PostUpdate />
          </>
        )}

        {role === "donor" && (
          <>
            <Donate />
          </>
        )}

        {/* Shared by all */}
        <CauseList />
        <DonationHistory />
      </div>
    </div>
  );
}

export default App;
