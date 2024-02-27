import { client } from "../index.api";

async function getProducts() {
  const response = await client.get("/deals");
  const data = response.data;
  console.log(data);

  return data;
}

const productsAPI = {
  getProducts,
};

export default productsAPI;
