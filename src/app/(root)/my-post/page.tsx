"use client";

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
