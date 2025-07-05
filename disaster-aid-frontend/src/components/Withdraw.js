import React, { useState } from "react";
import { getContract } from "../utils";
import { ethers } from "ethers";

function Withdraw() {
  const [causeId, setCauseId] = useState("");
  const [amount, setAmount] = useState("");

  const withdrawFunds = async () => {
    try {
      const contract = await getContract();
      const tx = await contract.withdraw(causeId, ethers.parseEther(amount));
      await tx.wait();
      alert("Withdrawal successful!");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div>
      <h3>Withdraw Funds (NGO)</h3>
      <input placeholder="Cause ID" onChange={(e) => setCauseId(e.target.value)} />
      <input placeholder="Amount in ETH" onChange={(e) => setAmount(e.target.value)} />
      <button onClick={withdrawFunds}>Withdraw</button>
    </div>
  );
}

export default Withdraw;
