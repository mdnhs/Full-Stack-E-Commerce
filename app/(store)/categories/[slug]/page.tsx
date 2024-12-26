import ProductsView from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getProductsByCategory } from "@/sanity/lib/products/getProductsByCategory";
import { FC, ReactElement } from "react";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

const CategoryPage: FC<CategoryPageProps> = async ({
  params,
}): Promise<ReactElement> => {
  const slug = (await params).slug;
  const products = await getProductsByCategory(slug);
  const categories = await getAllCategories();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-4">
      <div className=" bg-white p-8 rounded-lg shadow-md w-full ">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Catálogo de{" "}
            {slug
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}{" "}
          </h1>
          <ProductsView products={products} categories={categories} />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
