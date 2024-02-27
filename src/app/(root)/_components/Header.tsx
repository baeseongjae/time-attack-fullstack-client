import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center px-8 h-16">
      <Link href="/" className="text-3xl font-bold">
        중고마켓
      </Link>
      <nav className="ml-20">
        <ul className="flex items-center gap-x-4 bg-red-300">
          <li>
            <Link href="/">구입하기</Link>
          </li>
          <li>
            <Link href="/">문의하기</Link>
          </li>
          <li>
            <Link href="/">내 판매글</Link>
          </li>
        </ul>
      </nav>
      <div className="ml-auto flex">
        <Link href="/sign-up" className="px-3 py-2">
          회원가입
        </Link>
        <button className="px-3 py-2">로그인</button>
      </div>
    </header>
  );
}

export default Header;
