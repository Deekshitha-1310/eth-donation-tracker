import React, { useState } from "react";
import { getContract } from "../utils";
import { formatEther } from "ethers"; // ethers v6 format

function CauseList() {
  const [causes, setCauses] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadCauses = async () => {
    try {
      setLoading(true);
      const contract = await getContract();
      const all = await contract.getAllCauses();

      const formatted = all.map((data) => ({
        id: data.id.toString(),
        name: data.name,
        description: data.description,
        ngo: data.ngo,
        totalFunds: formatEther(data.totalFunds),
        withdrawnFunds: formatEther(data.withdrawnFunds),
        active: data.active,
      }));

      setCauses(formatted);
    } catch (err) {
      alert("Error loading causes: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-4">📋 View All Causes</h3>

      <button
        onClick={loadCauses}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Loading..." : "Load Causes"}
      </button>

      {causes.length === 0 && !loading && (
        <p className="text-gray-500 mt-4">🚫 No causes found.</p>
      )}

      <ul className="mt-4 space-y-4">
        {causes.map((c) => (
          <li
            key={c.id}
            className="border p-4 rounded shadow bg-white"
          >
            <h4 className="text-lg font-semibold text-blue-700">
              🌊 {c.name}
            </h4>
            <p className="text-sm text-gray-700 mb-1">{c.description}</p>
            <p>🆔 Cause ID: {c.id}</p>
            <p>🏥 NGO: {c.ngo}</p>
            <p>💰 Total Raised: {c.totalFunds} ETH</p>
            <p>💸 Withdrawn: {c.withdrawnFunds} ETH</p>
            <p>📡 Status: {c.active ? "✅ Active" : "❌ Closed"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CauseList;
