"use client";

import { useAuth } from "@/contexts/auth.context";
import Link from "next/link";

function HeaderSignWrapper() {
  const { isLoggedIn } = useAuth();

  return (
    <div className="ml-auto flex">
      {isLoggedIn ? (
        <button>로그아웃</button>
      ) : (
        <>
          <Link href="/sign-up" className="px-3 py-2">
            회원가입
          </Link>
          <Link href="/log-in" className="px-3 py-2">
            로그인
          </Link>
        </>
      )}
    </div>
  );
}

export default HeaderSignWrapper;
