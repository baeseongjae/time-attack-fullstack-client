"use client";

import api from "@/api/index.api";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import { useAuth } from "@/contexts/auth.context";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function SignUpPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const auth = useAuth();
  const router = useRouter();
  const { mutateAsync: logIn, isPending } = useMutation({
    mutationFn: api.auth.logIn,
  });

  const handleClickLogIn = async () => {
    if (!email) return alert("이메일을 입력해주세요");
    if (!password) return alert("비밀번호를 입력해주세요");

    try {
      const accessToken = await logIn({ email, password });
      auth.setIsLoggedIn(true);
      localStorage.setItem("accessToken", accessToken);
      alert("로그인 성공!");
    } catch (e) {
      alert("로그인에 실패했습니다.");
    }
  };

  useEffect(() => {
    if (auth.isLoggedIn) {
      router.push("/");
    }
  }, [auth.isLoggedIn, router]);

  return (
    <Page>
      <section className="max-w-lg mx-auto my-12 rounded-lg">
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
      </section>
    </Page>
  );
}

export default SignUpPage;
