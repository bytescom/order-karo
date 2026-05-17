import { useEffect, useState } from "react";
import axiosInstance from "./lib/axios";

function App() {
  const [message, setMessage] = useState("Checking backend connection...");
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/api/test");
        console.log(response.data);
        setConnected(true);
        setMessage(response.data.message || "Backend Connected ✅");
      } catch (error) {
        console.log(error);

        setConnected(false);
        setMessage("Backend Not Connected ❌");
      }
    };

    fetchData();
  }, []);

  return (
    <div >
      <h1 className="text-3xl text-blue-700">OrderKaro Frontend</h1>

      <h2>
        Status:{" "}
        <span style={{ color: connected ? "green" : "red" }}>
          {message}
        </span>
      </h2>
    </div>
  );
}

export default App;