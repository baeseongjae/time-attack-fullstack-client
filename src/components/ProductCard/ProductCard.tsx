import api from "@/api/index.api";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Awaited<ReturnType<typeof api.products.getProducts>>[number];
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href="/">
      <div>
        <Image src={product.imgsrc} alt={product.title} />
      </div>
      <h6>{product.title}</h6>
      <p>{product.content}</p>
      <p>{product.location}</p>
    </Link>
  );
}

export default ProductCard;
