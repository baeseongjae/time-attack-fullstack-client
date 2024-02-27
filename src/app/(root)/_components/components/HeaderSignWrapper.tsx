import Link from "next/link";

function HeaderSignWrapper() {
  return (
    <div className="ml-auto flex">
      <Link href="/sign-up" className="px-3 py-2">
        회원가입
      </Link>
      <button className="px-3 py-2">로그인</button>
    </div>
  );
}

export default HeaderSignWrapper;
