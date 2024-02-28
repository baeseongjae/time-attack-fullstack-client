import axios from "axios";
import authAPI from "./auth/auth.api";
import healthCheck from "./healthCheck/healthCheck.api";
import productsAPI from "./products/products.api";

// const accessToken =
//   typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

export const client = axios.create({
  baseURL: "http://localhost:5050",
  headers: {
    // Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
  },
});

const api = {
  healthCheck: healthCheck,
  auth: authAPI,
  products: productsAPI,
};

export default api;
