import React, { useState, useEffect } from "react";
import {
  BrowserProvider,
  Contract,
  formatEther,
  parseEther
} from "ethers";
import abi from "../abi/DisasterAid.json";
const contractAddress = "0x963d8cef95393e3647091A07727a7D00C6E9Df2c"; // Replace with your address

const VerifyNGO = () => {
  const [wallet, setWallet] = useState("");
  const [verified, setVerified] = useState(null);
  const [ngoToVerify, setNgoToVerify] = useState("");
  const [message, setMessage] = useState("");

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();
      setWallet(address);
      return { signer, provider }; // ✅ return both
    } else {
      alert("Please install MetaMask.");
      return null;
    }
  };

  const checkVerification = async () => {
    const result = await connectWallet();
    if (!result) return;
    const { signer } = result;

    try {
      const contract = new Contract(contractAddress, abi, signer);
      const isVerified = await contract.verifiedNGOs(wallet);
      setVerified(isVerified);
    } catch (err) {
      console.error("Error checking verification:", err);
      setVerified(null);
    }
  };

  const verifyNGO = async () => {
    const result = await connectWallet();
    if (!result) return;
    const { signer } = result;

    try {
      const contract = new Contract(contractAddress, abi, signer);
      const tx = await contract.verifyNGO(ngoToVerify);
      await tx.wait();
      setMessage("✅ NGO verified successfully!");
    } catch (err) {
      console.error("❌ Error verifying NGO:", err);
      setMessage("❌ Error verifying NGO. Are you the admin?");
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow-md bg-white my-4">
      <h3 className="text-lg font-bold mb-2">🛡️ NGO Verification Panel</h3>

      <p className="mb-1 text-sm">Connected Wallet: {wallet}</p>

      <button onClick={checkVerification} className="bg-green-600 text-white px-3 py-1 rounded mr-2">
        Check My NGO Status
      </button>
      {verified !== null && (
        <p className="mt-2">
          {verified ? "✅ You are a verified NGO." : "❌ You are NOT a verified NGO."}
        </p>
      )}

      <hr className="my-4" />

      <input
        type="text"
        placeholder="Enter NGO wallet address"
        value={ngoToVerify}
        onChange={(e) => setNgoToVerify(e.target.value)}
        className="border px-2 py-1 rounded w-full mb-2"
      />
      <button onClick={verifyNGO} className="bg-blue-600 text-white px-4 py-1 rounded">
        Verify NGO (Admin)
      </button>

      <p className="mt-2 text-sm text-gray-700">{message}</p>
    </div>
  );
};

export default VerifyNGO;
