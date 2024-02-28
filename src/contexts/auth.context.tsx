"use client";

import { client } from "@/api/index.api";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextValue = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  isAuthInitialized: boolean;
  setIsAuthInitialized: Dispatch<SetStateAction<boolean>>;
};

const isAccessTokenStored = !!(typeof window !== "undefined"
  ? localStorage.getItem("accessToken")
  : null);

// 초기값
const initialValue = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  isAuthInitialized: false,
  setIsAuthInitialized: () => {},
};

// 1. 컨텍스트 생성
const AuthContext = createContext<AuthContextValue>(initialValue);

// 2. 컨텍스트 사용
export const useAuth = () => useContext(AuthContext);

// 3. 범위지정, value 할당
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isAccessTokenStored);
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);

  const value: AuthContextValue = {
    isLoggedIn,
    setIsLoggedIn,
    isAuthInitialized,
    setIsAuthInitialized,
  };

  // 여기다 리프레시하는 토큰 작성.
  useEffect(() => {
    let timerId: number | undefined;
    if (isLoggedIn) {
      timerId = window.setInterval(async () => {
        console.log("안녕");
        const { data: accessToken } = await client.get<string>(
          "/auth/refresh-token"
        );
        console.log("리프레시한 엑세스토큰은", accessToken);

        client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

        // 로컬 스토리지도 갱신
        localStorage.setItem("accessToken", accessToken);
      }, 1000 * 60 * 4.5);

      return () => {
        window.clearInterval(timerId);
      };
    } else {
      if (!timerId) return;

      window.clearInterval(timerId);
    }
  }, []);

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken");
  //   if (accessToken) {
  //     setIsLoggedIn(true);
  //     client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  //   }
  //   setIsAuthInitialized(true);
  // }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
