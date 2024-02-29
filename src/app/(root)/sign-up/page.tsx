"use client";

import api from "@/api/index.api";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import { useAuth } from "@/contexts/auth.context";
import { checkEmail } from "@/utils/checkEmail";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function SignUpPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const auth = useAuth();
  const router = useRouter();
  const { mutateAsync: signUp, isPending } = useMutation({
    mutationFn: api.auth.signUp,
  });

  const handleClickSignUp = async () => {
    if (!email) return alert("이메일을 입력해주세요");
    const isValidEmail = checkEmail(email);
    if (!isValidEmail) return alert("올바르지 않은 형식의 이메일입니다.");
    if (!password) return alert("비밀번호를 입력해주세요");
    if (!rePassword) return alert("비밀번호 확인을 입력해주세요");
    if (password.length < 8)
      return alert("비밀번호는 8자리 이상이어야 합니다.");
    if (password !== rePassword)
      return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");

    try {
      const accessToken = await signUp({ email, password });
      auth.setIsLoggedIn(true);
      localStorage.setItem("accessToken", accessToken);
      alert("환영합니다~~! 회원가입에 성공하였습니다.");
    } catch (e) {
      alert("회원가입에 실패하였습니다.");
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
        <Heading>회원가입</Heading>
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
            <li className="flex flex-col">
              <label htmlFor="rePassword">비밀번호 확인</label>
              <input
                type="password"
                id="rePassword"
                className="h-12 border border-slate-300 focus:border-black outline-none transition rounded-md pl-4"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
                disabled={isPending}
              />
            </li>
          </ul>
          <button
            onClick={handleClickSignUp}
            className="bg-purple-700 text-white font-semibold h-12 mt-10 transition hover:-translate-y-1 active:translate-y-0"
            disabled={isPending}
          >
            회원가입하기
          </button>
        </form>
      </section>
    </Page>
  );
}

export default SignUpPage;
