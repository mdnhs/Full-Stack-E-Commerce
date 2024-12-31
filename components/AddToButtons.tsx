"use client";
import type { Product } from "@/sanity.types";
import useBasketStore from "@/store";
import { Heart, ShoppingBag } from "lucide-react";
import { ReactElement } from "react";

export const dynamic = "force-static";

interface AddToButtonProps {
  product: Product;
}

const AddToButton = ({ product }: AddToButtonProps): ReactElement => {
  const { addItem } = useBasketStore();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <button
          onClick={() => addItem(product)}
          className="w-full bg-black text-white py-3 px-6 rounded-full hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingBag className="h-5 w-5" />
          Agregar al carrito
        </button>

        <button
          onClick={() => {}}
          className="w-full border border-gray-300 py-3 px-6 rounded-full hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
        >
          <Heart className="h-5 w-5" />
          Agregar a favoritos
        </button>
      </div>

      <div className="flex items-start">
        <button className="text-sm text-gray-600 underline hover:text-gray-900 transition-colors">
          Guía de tallas
        </button>
      </div>
    </div>
  );
};

export default AddToButton;
