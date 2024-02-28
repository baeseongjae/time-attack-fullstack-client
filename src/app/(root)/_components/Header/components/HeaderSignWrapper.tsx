"use client";

import { useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LogInModal from "./LogInModal/LogInModal";

function HeaderSignWrapper() {
  const auth = useAuth();
  const router = useRouter();
  const modal = useModal();

  const handleClickLogOut = async () => {
    auth.setIsLoggedIn(false);
    localStorage.removeItem("accessToken");
    alert("로그아웃 처리되었습니다.");
    router.push("/");
  };

  const handleClickLogIn = () => {
    modal.open(<LogInModal />);
  };

  return (
    <div className="ml-auto flex">
      {auth.isLoggedIn ? (
        <button onClick={handleClickLogOut}>로그아웃</button>
      ) : (
        <>
          <Link href="/sign-up" className="px-3 py-2">
            회원가입
          </Link>
          <button onClick={handleClickLogIn} className="px-3 py-2">
            로그인
          </button>
        </>
      )}
    </div>
  );
}

export default HeaderSignWrapper;
