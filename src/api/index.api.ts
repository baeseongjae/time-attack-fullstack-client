import axios from "axios";
import authAPI from "./auth/auth.api";
import healthCheck from "./healthCheck.api/healthCheck.api";

export const client = axios.create({
  baseURL: "http://localhost:5050",
});

const api = {
  healthCheck: healthCheck,
  auth: authAPI,
};

export default api;
