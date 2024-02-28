import { client } from "../index.api";
import { LogInDto, SignUpDto } from "./auth.dto";

async function signUp(dto: SignUpDto) {
  const response = await client.post("/auth/sign-up", dto);
  const data = response.data;
  const accessToken = data.accessToken;

  if (!accessToken) throw new Error("회원가입에 실패하였습니다~!");

  client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  return accessToken;
}

async function logIn(dto: LogInDto) {
  const response = await client.post("/auth/log-in", dto);
  const data = response.data;
  const accessToken = data.accessToken;

  if (!accessToken) throw new Error("로그인에 실패하였습니다~!");

  client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  return accessToken;
}

// 리프레시 토큰??

const authAPI = {
  signUp,
  logIn,
};

export default authAPI;
