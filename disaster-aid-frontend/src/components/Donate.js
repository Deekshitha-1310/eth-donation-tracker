// components/Donate.js
import React, { useState } from "react";
import { getContract } from "../utils";
import { ethers } from "ethers";

function Donate() {
  const [causeId, setCauseId] = useState("");
  const [amount, setAmount] = useState("");

  const donate = async () => {
    try {
      const contract = await getContract();
      const tx = await contract.donate(causeId, {
        value: ethers.parseEther(amount),
      });
      await tx.wait();
      alert("Donation successful!");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div>
      <h3>Donate to a Cause</h3>
      <input placeholder="Cause ID" onChange={(e) => setCauseId(e.target.value)} />
      <input placeholder="Amount (ETH)" onChange={(e) => setAmount(e.target.value)} />
      <button onClick={donate}>Donate</button>
    </div>
  );
}

export default Donate;
