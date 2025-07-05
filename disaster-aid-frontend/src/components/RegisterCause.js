// components/RegisterCause.js
import React, { useState } from "react";
import { getContract } from "../utils";

function RegisterCause() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleRegister = async () => {
    try {
      const contract = await getContract();
      const tx = await contract.registerCause(name, desc);
      await tx.wait();
      alert("Cause Registered!");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div>
      <h3>Register a Cause (NGO only)</h3>
      <input placeholder="Cause name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Description" onChange={(e) => setDesc(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default RegisterCause;
