import api from "@/api/index.api";
import Page from "@/components/Page";
import Price from "@/components/Price";
import Image from "next/image";

async function ProductDetailPage(props: { params: { dealId: string } }) {
  const productId = Number(props.params.dealId);
  const data = await api.products.getProduct(productId);
  const product = data?.post;
  console.log(product);

  return (
    <Page>
      <section className="max-w-lg mx-auto px-8 py-12 bg-pink-700">
        <div className="">
          <Image
            src={`http://localhost:5050${product.imgSrc}`}
            alt={product.title}
            width={300}
            height={300}
            unoptimized
            className="bg-yellow-200 max-w-full h-64"
          />
        </div>
        <div className="flex items-center py-6">
          <div className="bg-purple-400 rounded-full w-12 h-12"></div>
          <div className="ml-4">
            <p>{product.authorId}</p>
            <p>{product.location}</p>
          </div>
        </div>
        <h6>{product.title}</h6>
        <p className="text-2xl font-bold">
          <Price amount={product.price} />
        </p>
        <p>{product.content}</p>
      </section>
    </Page>
  );
}

export default ProductDetailPage;
