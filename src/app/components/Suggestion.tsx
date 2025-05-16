"use client";
import ProductGrid from "../Reusable_Components/ProductGrid";
import { products } from "../assets/data";

export default function Suggestion() {

  return (
    <>
      <ProductGrid title="You may also like" products={products} />
    </>
  );
}
