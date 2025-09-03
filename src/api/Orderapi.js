import axios from "axios";

const API = axios.create({
  baseURL: "https://scarlit-backend.onrender.com/", // backend base URL
});

export const createOrder = (data) => API.post("/api/order/create", data);
