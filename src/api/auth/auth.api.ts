import { client } from "../index.api";
import { LogInDto, SignUpDto } from "./auth.dto";

async function signUp(dto: SignUpDto) {
  const response = await client.post<Response>("/auth/sign-up", dto);
  return response;
}

async function logIn(dto: LogInDto) {
  const response = await client.post<Response>("/auth/log-in", dto);
  return response;
}

async function logOut() {
  const response = await client.delete<Response>("/auth/log-out");
  return response;
}

// 리프레시 토큰

const authAPI = {
  signUp,
  logIn,
  logOut,
};

export default authAPI;
