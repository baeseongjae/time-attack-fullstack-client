import { setAuthInterceptor } from "@/interceptors/authInterceptors";
import axios from "axios";
import authAPI from "./auth/auth.api";
import healthCheck from "./healthCheck.api/healthCheck.api";
import productsAPI from "./products/products.api";

export const client = axios.create({
  baseURL: "http://localhost:5050",
});

setAuthInterceptor();

const api = {
  healthCheck: healthCheck,
  auth: authAPI,
  products: productsAPI,
};

export default api;
