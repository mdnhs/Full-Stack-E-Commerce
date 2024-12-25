"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { imageUrl } from "@/lib/imageUrl";
import type { Product } from "@/sanity.types";
import { Bookmark, Share2, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
}): ReactElement => {
  const rating = 5;
  const isNew = true;
  const colors = ["#000000", "#fff", "#667380"];
  //   const isOutOfStock = product.stock != null && product.stock <= 0;

  return (
    <Link href={`/product/${product.slug?.current}`}>
      <Card className="w-[350px] overflow-hidden group bg-[#f6f6f6] border hover:shadow-xl transition-all duration-500 relative">
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            <div className="relative h-[400px]">
              <Image
                src={imageUrl(product.image || "").url()}
                alt={product.name || "Product Image"}
                priority
                width={800}
                height={800}
                className="w-full h-full object-contain "
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Quick actions */}
            <Button
              size="icon"
              variant="secondary"
              className="absolute top-4 right-4 rounded-full w-10 h-10 bg-white/70 selection:hover:bg-white transition-all duration-300 hover:scale-110 z-10"
              onClick={(e) => {
                e.preventDefault();
                // Share logic here
              }}
            >
              <Share2 className="w-5 h-5 text-neutral-600" />
              <span className="sr-only">Share product</span>
            </Button>

            {/* New badge */}
            {isNew && (
              <Badge className="absolute top-4 left-4 bg-black text-white px-3 py-1">
                NEW
              </Badge>
            )}

            {/* Quick view overlay */}
            <div className="absolute inset-x-0 bottom-0 h-12 bg-white/70 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center">
              <span className="text-sm font-medium">Quick View</span>
            </div>
          </div>

          <div className="p-5 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-lg tracking-tight group-hover:text-neutral-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-neutral-500 text-sm line-clamp-2">
                  {product.description?.map((block) =>
                    block._type === "block"
                      ? block.children?.map((child) => child.text).join("")
                      : "",
                  )}
                </p>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="hover:scale-110 transition-transform duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  // Wishlist logic here
                }}
              >
                <Bookmark className="w-5 h-5" />
                <span className="sr-only">Save to wishlist</span>
              </Button>
            </div>

            {/* Color variants */}
            <div className="flex gap-1">
              {colors.map((color, i) => (
                <div
                  key={i}
                  className="size-5 rounded-full ring-[1px] ring-gray-500/80  cursor-pointer hover:scale-110 transition-transform"
                  style={{ backgroundColor: color }}
                  onClick={(e) => {
                    e.preventDefault();
                    // Color selection logic here
                  }}
                />
              ))}
            </div>

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-neutral-200 text-neutral-200"
                  }`}
                />
              ))}
            </div>

            {product.price && (
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">
                  ${Math.round(product.price * 0.6)}
                </span>
                <span className="text-sm text-neutral-500 line-through">
                  ${Math.round(product.price)}
                </span>
                <span className="text-sm text-green-600 font-semibold ml-auto">
                  {Math.round((product.price * 40) / 100)}% OFF
                </span>
              </div>
            )}

            {product.stock && product.stock <= 0 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <span className="text-white text-lg font-bold">
                  Out of Stock
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
