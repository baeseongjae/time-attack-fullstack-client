import { client } from "../index.api";

async function getProducts() {
  const response = await client.get("/deals");
  const data = response.data;

  return data;
}

async function getProduct(productId: number) {
  const response = await client.get(`/deals/${productId}`);
  const data = response.data;

  return data;
}

const productsAPI = {
  getProducts,
  getProduct,
};

export default productsAPI;
