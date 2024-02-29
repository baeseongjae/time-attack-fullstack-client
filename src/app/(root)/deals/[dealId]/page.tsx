import api from "@/api/index.api";
import Page from "@/components/Page";
import Price from "@/components/Price";
import Image from "next/image";
import Link from "next/link";

async function ProductDetailPage(props: { params: { dealId: string } }) {
  const productId = Number(props.params.dealId);
  const data = await api.products.getProduct(productId);
  const product = data?.post;

  console.log(product);

  const handleClickDeleteButton = async () => {
    const deletedPost = await api.products.deleteMyPostOfProduct(productId);
    console.log(deletedPost);
  };

  return (
    <Page>
      <section className="max-w-lg mx-auto px-8 py-12">
        <div className="">
          <Image
            src={`http://localhost:5050${product.imgSrc}`}
            alt={product.title}
            width={650}
            height={650}
            unoptimized
            className="bg-yellow-200 max-w-full h-64"
          />
        </div>
        <div className="flex items-center py-6 border-black border-b">
          <div className="bg-purple-400 rounded-full w-12 h-12"></div>
          <div className="ml-4">
            <p>{product.authorId}</p>
            <p>{product.location}</p>
          </div>
        </div>
        <h6 className="pt-4 text-2xl">{product.title}</h6>
        <p className="text-2xl font-bold pb-8">
          <Price amount={product.price} />
        </p>
        <p>{product.content}</p>
        <div className="flex justify-end gap-x-8">
          <Link
            href={`./${productId}/edit`}
            className="bg-violet-600 text-white px-3 py-2 rounded-md hover:bg-violet-400 inline-block mt-4"
          >
            글 수정하기
          </Link>
          <button className="bg-violet-600 text-white px-3 py-2 rounded-md hover:bg-violet-400 inline-block mt-4">
            글 삭제하기
          </button>
        </div>
        {/* {auth.isLoggedIn ? (
          <button className="bg-blue-500 rounded-md hover:bg-blue-300">
            관심 표현하기
          </button>
        ) : null} */}
      </section>
    </Page>
  );
}

export default ProductDetailPage;
