"use client";

import api from "@/api/index.api";
import Heading from "@/components/Heading";
import Page from "@/components/Page";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

function CreatePostPage() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const router = useRouter();

  const handleSubmitWriting: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const createProductData = {
      title,
      content,
      location,
      price,
    };
    // post api호출.
    const post = api.products.createPostOfProduct(createProductData);
    setTitle("");
    setContent("");
    setLocation("");
    setPrice("");
    alert("게시글이 성공적으로 등록되었습니다.");
    router.push("/deals/create");
  };

  return (
    <Page>
      <section className="max-w-lg mx-auto my-12 rounded-lg">
        <Heading>판매글 작성하기</Heading>
        <form
          action=""
          onSubmit={handleSubmitWriting}
          className="flex flex-col"
        >
          <ul className="flex flex-col gap-y-4">
            <li className="flex flex-col">
              <label htmlFor="title">글 제목</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-12 border border-slate-300 focus:border-black outline-none transition rounded-md pl-4"
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="content">글 내용</label>
              <textarea
                name="content"
                cols={30}
                rows={10}
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="border border-slate-300 focus:border-black outline-none transition rounded-md pl-4 py-3"
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="location">직거래 위치</label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="h-12 border border-slate-300 focus:border-black outline-none transition rounded-md pl-4"
              />
            </li>
            <li className="flex flex-col">
              <label htmlFor="price">판매 가격</label>
              <input
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="h-12 border border-slate-300 focus:border-black outline-none transition rounded-md pl-4"
              />
            </li>
          </ul>
          <button
            type="submit"
            className="bg-purple-700 text-white font-semibold h-12 mt-10 transition rounded-lg hover:-translate-y-1 active:translate-y-0"
          >
            판매글 작성하기
          </button>
        </form>
      </section>
    </Page>
  );
}

export default CreatePostPage;
