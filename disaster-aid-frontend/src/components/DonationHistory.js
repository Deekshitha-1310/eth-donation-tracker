import React, { useState } from "react";
import { getContract } from "../utils";

function DonationHistory() {
  const [causeId, setCauseId] = useState("");
  const [donations, setDonations] = useState([]);

  const loadDonations = async () => {
    try {
      const contract = await getContract();
      const data = await contract.getDonations(causeId);
      const donors = data[0];
      const amounts = data[1];

      const entries = donors.map((d, i) => ({
        donor: d,
        amount: amounts[i],
      }));

      setDonations(entries);
    } catch (err) {
      alert("Error loading donations: " + err.message);
    }
  };

  return (
    <div>
      <h3>Donation History</h3>
      <input placeholder="Cause ID" onChange={(e) => setCauseId(e.target.value)} />
      <button onClick={loadDonations}>View Donations</button>

      <ul>
        {donations.map((d, i) => (
          <li key={i}>
            🧑 {d.donor} — 💸 {d.amount.toString()} wei
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DonationHistory;
