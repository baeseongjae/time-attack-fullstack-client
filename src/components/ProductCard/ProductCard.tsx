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
          src={`http://localhost:5050${product.imgSrc}`}
          width={300}
          height={300}
          alt={product.title}
          className="bg-yellow-200 w-full h-64"
        />
      </div>
      <div className="pl-2">
        <h6 className="pt-4 text-lg">{product.title}</h6>
        <p className="text-xl font-bold pb-2">
          <Price amount={product.price} />
        </p>
        <p>{product.location}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
