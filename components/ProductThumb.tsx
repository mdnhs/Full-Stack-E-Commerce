import { Product } from "@/sanity.types";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";

interface ProductThumbProps {
  // Prop types here
  product: Product;
}

const ProductThumb: FC<ProductThumbProps> = ({ product }): ReactElement => {
  const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <Link
      href={`/product/${product.slug?.current}`}
      className={`group flex flex-col bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out overflow-hidden ${
        isOutOfStock ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <div className="relative aspect-square size-full overflow-hidden">
        {product.image && (
          <Image
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            src={imageUrl(product.image).url()}
            alt={product.name || "Product Image"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <span className="text-white text-lg font-bold">Out of Stock</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductThumb;
