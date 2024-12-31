import { type Category, type Product } from "@/sanity.types";
import { FC, ReactElement } from "react";
import { CategoryFilter } from "./CategorySelector";
import NoProductsFound from "@/components/NoProductsFound";
import ProductGrid from "@/components/ProductGrid";

interface ProductsViewProps {
  products: Product[];
  categories: Category[];
}

const ProductsView: FC<ProductsViewProps> = ({
  products,
  categories,
}): ReactElement => {
  return (
    <div>
      <div className="w-full sm:w-[300px]  pl-4 pt-4">
        {/* <CategorySelectorComponent categories={categories} /> */}
        <CategoryFilter categories={categories} />
      </div>

      {/* Products */}
      <div className="flex-1 size-full">
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <NoProductsFound />
        )}
      </div>
    </div>
  );
};

export default ProductsView;
