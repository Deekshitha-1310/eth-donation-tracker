import React, { useState } from "react";
import { getContract } from "../utils";

function PostUpdate() {
  const [causeId, setCauseId] = useState("");
  const [updateText, setUpdateText] = useState("");

  const post = async () => {
    try {
      const contract = await getContract();
      const tx = await contract.postUpdate(causeId, updateText);
      await tx.wait();
      alert("Update posted!");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div>
      <h3>Post Status Update (NGO)</h3>
      <input placeholder="Cause ID" onChange={(e) => setCauseId(e.target.value)} />
      <input placeholder="Update text" onChange={(e) => setUpdateText(e.target.value)} />
      <button onClick={post}>Post Update</button>
    </div>
  );
}

export default PostUpdate;
