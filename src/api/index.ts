import axios from "axios";
import healthCheck from "./healthCheck.api/healthCheck.api";

export const client = axios.create({
  baseURL: "http://localhost:5050",
});

const api = {
  healthCheck: healthCheck,
};

export default api;
