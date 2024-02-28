// import { client } from "@/api/index.api";

// export function setAuthInterceptor() {
//   client.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       if (error.response && error.response.status === 401) {
//         alert("세션이 만료되었습니다. 다시 로그인해주세요");
//         localStorage.removeItem("accessToken");
//         window.localStorage.href = "/log-in";
//       }
//       throw error;
//     }
//   );
// }
