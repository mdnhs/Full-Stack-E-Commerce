import { formatCurrency } from "@/lib/formatCurrency";
import { imageUrl } from "@/lib/imageUrl";
import { Product } from "@/sanity.types";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { Button } from "./ui/button";

interface ProductThumbProps {
  // Prop types here
  product: Product;
}

const ProductThumb: FC<ProductThumbProps> = ({ product }): ReactElement => {
  const isOutOfStock = product.stock != null && product.stock <= 0;
  // descuento del 40%
  const discount = product.price! * 0.4;

  return (
    <Link
      href={`/product/${product.slug?.current}`}
      className={`group min-w-[400px] min-h-[400px] md:min-h-[680px] flex flex-col rounded border border-gray-200/30  shadow-sm hover:shadow-md size-full transition-all duration-700  overflow-hidden ${
        isOutOfStock ? "opacity-50" : ""
      }`}
    >
      <div className="relative size-full overflow-hidden">
        {product.image && (
          <Image
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            src={imageUrl(product.image).url()}
            alt={product.name || "Product Image"}
            priority
            fill
            unoptimized
          />
        )}

        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <span className="text-white text-lg font-bold">Out of Stock</span>
          </div>
        )}

        <div className="hidden translate-y-20 group-hover:translate-y-0 opacity-0 group-hover:block group-hover:opacity-100 transition-all duration-1000  absolute bottom-5 translate-x-1/2 right-1/2 z-10 ">
          <Button className="rounded-full text-sm  font-medium px-5 py-5">
            Vista Rápida
          </Button>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-sm font-medium text-gray-700 truncate">
          {product.name}
        </h2>
        <div className="flex items-center mt-1">
          <div className="flex items-center gap-2">
            <span className="text-base line-through font-medium  text-gray-500">
              {formatCurrency(product.price! + discount)}
            </span>
            <span className="text-base font-semibold text-gray-800">
              {formatCurrency(product.price!)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductThumb;
