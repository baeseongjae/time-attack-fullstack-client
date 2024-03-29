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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);

  const value: AuthContextValue = {
    isLoggedIn,
    setIsLoggedIn,
    isAuthInitialized,
    setIsAuthInitialized,
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setIsLoggedIn(true);
      client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    }
    setIsAuthInitialized(true);
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
