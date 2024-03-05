"use client"; // 클라이언트 사이드로 만들자! (accessToken이 브라우저에 있으므로.)

import api from "@/api/index.api";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import ProductCardsList from "@/components/ProductCardsList";
import { useEffect, useState } from "react";

function MyPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    api.products.getMyPostsOfProduct().then((data) => setPosts(data.myPosts));
  }, []);
  return (
    <Page>
      <section>
        <Heading>내 판매글</Heading>
        <ProductCardsList products={posts || []} />
      </section>
    </Page>
  );
}

export default MyPage;
