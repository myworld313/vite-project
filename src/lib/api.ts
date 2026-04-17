import axios from "axios";

// Frontend-owned Axios client for browser requests.
export const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
