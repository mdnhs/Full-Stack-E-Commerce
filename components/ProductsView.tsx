import { Product } from "@/sanity.types";
import { FC, ReactElement } from "react";
import ProductGrid from "./ProductGrid";

interface ProductsViewProps {
  products: Product[];
}

const ProductsView: FC<ProductsViewProps> = ({ products }): ReactElement => {
  return (
    <div>
      {/* Categories */}
      <div className="w-full sm:w-[200px]">
        {/* <CategorySelectorComponent Categories={categories}  /> */}
      </div>

      {/* Products */}
      <div className="flex-1">
        <ProductGrid products={products} />

        <hr className="w-1/2 sm:w-3/4" />
      </div>
    </div>
  );
};

export default ProductsView;
