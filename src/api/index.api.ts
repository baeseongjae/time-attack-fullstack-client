import axios from "axios";
import authAPI from "./auth/auth.api";
import healthCheck from "./healthCheck.api/healthCheck.api";
import productsAPI from "./products/products.api";

export const client = axios.create({
  baseURL:
    "https://port-0-time-attack-fullstack-server-dc9c2nltdolfnd.sel5.cloudtype.app",
});

// setAuthInterceptor();

const api = {
  healthCheck: healthCheck,
  auth: authAPI,
  products: productsAPI,
};

export default api;
