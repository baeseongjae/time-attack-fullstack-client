import Link from "next/link";

function HeaderLogo() {
  return (
    <h1>
      <Link href="/" className="text-3xl font-bold">
        중고마켓
      </Link>
    </h1>
  );
}

export default HeaderLogo;
