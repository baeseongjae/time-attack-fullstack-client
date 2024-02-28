"use client"; // 클라이언트 사이드로 만들자! (accessToken이 브라우저에 있으므로.)
import api from "@/api/index.api";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import ProductCardsList from "@/components/ProductCardsList";

async function MyPage() {
  const myPosts = await api.products.getMyPostsOfProduct();
  console.log("마이포스트는", myPosts);
  return (
    <Page>
      <section>
        <Heading>내 판매글</Heading>
        <ProductCardsList products={myPosts?.myPosts} />
      </section>
    </Page>
  );
}

export default MyPage;
