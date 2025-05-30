import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const fetchNames = async () => {
    const res = await axios.get("/api/names");
    setNames(res.data);
  };

  useEffect(() => {
    fetchNames();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/names", { name });
    setName("");
    fetchNames();
  };

  return (
    <div>
      <h1>Adınızı Girin</h1>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Gönder</button>
      </form>
      <ul>
        {names.map((n, i) => (
          <li key={i}>{n.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
