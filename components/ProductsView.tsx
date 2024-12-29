import { CategorySelectorComponent } from "@/components/ui/category-selector";
import { type Category, type Product } from "@/sanity.types";
import { PackageSearchIcon } from "lucide-react";
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
      <div className="flex-1 size-full">
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="flex flex-col items-center justify-center gap-3.5 min-h-[50dvh]">
            <PackageSearchIcon className="size-16 text-gray-600" />
            <div className="text-center text-gray-600 text-lg">
              No se encontraron productos
            </div>
          </div>
        )}

        <hr className="w-1/2 sm:w-3/4 mt-4 mx-auto" />
      </div>
    </div>
  );
};

export default ProductsView;
