import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://connection-front-back-4.onrender.com/api/user")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []); // ✅ important

  return (
    <div>
      {user.map((data) => (
        <div key={data.id}>
          <h2>{data.name}</h2>
          <p>{data.email}</p>
          <p>{data.phone}</p>
          <p>{data.website}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
