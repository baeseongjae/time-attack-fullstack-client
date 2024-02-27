import api from "@/api/index.api";
import Page from "@/components/Page";
import Image from "next/image";

async function ProductDetailPage(props: { params: { productId: string } }) {
  const productId = Number(props.params.productId);
  const data = await api.products.getProduct(productId);
  const product = data?.post;

  return (
    <Page>
      <section className="max-w-screen-sm mx-auto px-8 py-12 bg-pink-700">
        <div className="">
          <Image src={product.imgsrc} alt={product.title} />
        </div>
        <h6>{product.title}</h6>
        <p>{product.price}</p>
        <p>{product.content}</p>
      </section>
    </Page>
  );
}

export default ProductDetailPage;
