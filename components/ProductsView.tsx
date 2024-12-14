import { CategorySelectorComponent } from "@/components/ui/category-selector";
import { type Category, type Product } from "@/sanity.types";
import { FC, ReactElement } from "react";
import ProductGrid from "./ProductGrid";

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
      {/* Categories */}
      <div className="w-full sm:w-[200px]">
        <CategorySelectorComponent categories={categories} />
      </div>

      {/* Products */}
      <div className="flex-1">
        <ProductGrid products={products} />
        <hr className="w-1/2 sm:w-3/4 mt-4 mx-auto" />
      </div>
    </div>
  );
};

export default ProductsView;
