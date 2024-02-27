import { client } from "../index.api";
import { CreateProductDto } from "./products.dto";

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

async function createPostOfProduct(createProductDto: CreateProductDto) {
  const response = await client.post(`/deals/create`, createProductDto);
  const data = response.data;

  return data;
}

const productsAPI = {
  getProducts,
  getProduct,
  createPostOfProduct,
};

export default productsAPI;
