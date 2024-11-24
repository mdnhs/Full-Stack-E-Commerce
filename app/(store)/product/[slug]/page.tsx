import { getProductBySlug } from "@/sanity/lib/products/getProductBySlug";
import { FC, ReactElement } from "react";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

const ProductPage: FC<ProductPageProps> = async ({ params }): Promise<ReactElement> => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  console.log(product);
  return <div>content</div>;
};

export default ProductPage;
