import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // backend base URL
});

export const createOrder = (data) => API.post("/api/order/create", data);
