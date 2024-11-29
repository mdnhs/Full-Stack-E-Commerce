import BlackFridayBanner from "@/components/BlackFridayBanner";
import ProductsView from "@/components/ProductsView";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();
  // const categories = await getAllCategories();
  return (
    <div className="bg-gray-100">
      <BlackFridayBanner />
      <div className="flex flex-col items-center justify-start w-full min-h-screen bg-gray-100 p-4 container mx-auto ">
        <ProductsView products={products} />
      </div>
    </div>
  );
}
