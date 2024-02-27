"use client";

import Heading from "@/components/Heading";
import Page from "@/components/Page";
import { useState } from "react";

function SignUpPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");

  const handleClickSignUp = async () => {
    if (!email) return alert("이메일을 입력해주세요");
    if (!password) return alert("비밀번호를 입력해주세요");
    if (!rePassword) return alert("비밀번호 확인을 입력해주세요");
    if (password !== rePassword)
      return alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
  };

  return (
    <Page>
      <section className="max-w-lg mx-auto my-12 rounded-lg">
        <Heading>회원가입</Heading>
        <form action="" className="flex flex-col gap-y-4">
          <ul className="flex flex-col gap-y-4">
            <li className="flex flex-col">
              <label htmlFor="email">이메일</label>
              <input
                type="text"
                id="email"
                className="h-12 border border-slate-300 focus:border-black outline-none transition rounded-md pl-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              />
            </li>
          </ul>
          <button
            onClick={handleClickSignUp}
            className="bg-purple-700 text-white font-semibold h-12 mt-10 transition hover:-translate-y-1 active:translate-y-0"
          >
            회원가입하기
          </button>
        </form>
      </section>
    </Page>
  );
}

export default SignUpPage;
