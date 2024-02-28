"use client";

import api from "@/api/index.api";
import Heading from "@/components/Heading";
import Modal from "@/components/Modal";
import { useAuth } from "@/contexts/auth.context";
import { useModal } from "@/contexts/modal.context";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function LogInModal() {
  const { mutateAsync: logIn, isPending } = useMutation({
    mutationFn: api.auth.logIn,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const router = useRouter();
  const modal = useModal();

  const handleClickLogIn = async () => {
    if (!email.trim()) return alert("이메일을 입력해 주세요");
    if (!password.trim()) return alert("비밀번호를 입력해 주세요");

    try {
      const accessToken = await logIn({ email, password });

      // 1. 헤더에 엑세스 토큰 삽입 -> 바로 위 logIn 함수에서.
      // 2. 전역 로그인상태 true로 변경
      auth.setIsLoggedIn(true);
      // 3. 스토리지에 저장
      localStorage.setItem("accessToken", accessToken);
      router.push("/");
      alert("로그인 성공!");
      modal.close();
    } catch (e) {
      alert("로그인에 실패하였습니다.");
    }
  };

  useEffect(() => {
    if (auth.isLoggedIn) {
      router.push("/");
    }
  }, [auth.isLoggedIn, router]);

  return (
    <Modal>
      <Heading>로그인</Heading>
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-y-4"
      >
        <ul className="flex flex-col gap-y-4">
          <li className="flex flex-col">
            <label htmlFor="email">이메일</label>
            <input
              type="text"
              id="email"
              className="h-12 border border-slate-300 focus:border-black outline-none transition rounded-md pl-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isPending}
            />
          </li>
          <li className="flex flex-col">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              className="h-12 border border-slate-300 focus:border-black outline-none transition rounded-md pl-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isPending}
            />
          </li>
        </ul>
        <button
          onClick={handleClickLogIn}
          className="bg-purple-700 text-white font-semibold h-12 mt-10 transition hover:-translate-y-1 active:translate-y-0"
          disabled={isPending}
        >
          로그인하기
        </button>
      </form>
    </Modal>
  );
}

export default LogInModal;
