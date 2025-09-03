import axios from "axios";

const API = axios.create({
  baseURL: "https://scarlit-backend.onrender.com/",
});

// Optional: Add interceptors (JWT token, error handling, etc.)
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;
