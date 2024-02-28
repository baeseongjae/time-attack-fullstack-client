import api from "@/api/index.api";
import Image from "next/image";
import Link from "next/link";
import Price from "../Price";

interface ProductCardProps {
  product: Awaited<ReturnType<typeof api.products.getProducts>>[number];
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/deals/${product.id}`}>
      <div>
        <Image
          src={product.imgSrc}
          width={300}
          height={300}
          alt={product.title}
          className="bg-yellow-200 w-full h-64"
        />
      </div>
      <h6 className="">{product.title}</h6>
      <p>
        <Price amount={product.price} />
      </p>
      <p>{product.content}</p>
      <p>{product.location}</p>
    </Link>
  );
}

export default ProductCard;
