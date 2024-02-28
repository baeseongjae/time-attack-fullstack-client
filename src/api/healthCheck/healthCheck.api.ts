import { client } from "../index.api";

async function healthCheck() {
  const response = await client.get<Response>("/health-check");
  const data = response.data;

  return data;
}

export default healthCheck;
