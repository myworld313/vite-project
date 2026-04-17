import { useEffect, useState } from "react";
import pic from "../assets/pic.jpg";
import api from "../lib/api";

export function Home() {
  const [message, setMessage] = useState("Loading backend message...");

  useEffect(() => {
    api
      .get("/api/message")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch(() => {
        setMessage("Could not reach the backend.");
      });
  }, []);

  return (
    <div className="w-100 m-5 bg-gray-500 p-3.5 rounded-lg">
      <img src={pic} alt="Description" />
      <h1 className="text-2xl">Home</h1>
      <p>Welcome to the home page!</p>
      <p className="mt-3 rounded-md bg-white/80 p-2 text-black">{message}</p>
    </div>
  );
}
