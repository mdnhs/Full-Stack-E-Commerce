import ProductsView from "@/components/ProductsView";
import SliderImages from "@/components/SliderImages";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();
  return (
    <div className="bg-gray-100">
      <SliderImages />
      <div className="flex flex-col items-center justify-start w-full min-h-screen bg-gray-100 p-4 pb-6 container mx-auto ">
        <ProductsView products={products} categories={categories} />
      </div>
    </div>
  );
}
