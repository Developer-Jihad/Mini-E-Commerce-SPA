// REMOVE "use client";

import { products } from "../../../data/products";
import { notFound } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient"; // Import the new client component
import { Product } from "@/components/ProductCard";

// Define the props type according to Next.js 15 standards (params is a Promise)
type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

// Page components should be async if they await params
export default async function ProductDetailPage({ params }: PageProps) {
  // Await the params object
  const { id } = await params;

  const product: Product | undefined = products.find((p) => p.id === id);

  if (!product) {
    return notFound();
  }

  // Calculate related products here (on the server)
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  // Render the Client Component and pass the data
  return (
    <ProductDetailClient product={product} relatedProducts={relatedProducts} />
  );
}
