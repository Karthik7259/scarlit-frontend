import axios from "axios";

const API = axios.create({
  // baseURL: "https://scarlit-backend.onrender.com/", // Comment out production
  baseURL: "https://scarlit-backend.onrender.com/", // Use local development
});

export const createOrder = (data) => API.post("/api/order/create", data);
