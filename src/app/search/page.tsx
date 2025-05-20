// app/search/page.tsx
"use client";
import { useSearchParams } from "next/navigation";
import { Beautyproducts, Fashionproducts, Gadgetproducts, products } from "../assets/data";
import SearchProducts from "../Reusable_Components/SearchProduct";

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  const allProducts = [
  ...Gadgetproducts.map((p) => ({ ...p, id: p.id + 1000 })),  
  ...Beautyproducts.map((p) => ({ ...p, id: p.id + 2000 })),  
  ...products.map((p) => ({ ...p, id: p.id + 3000 })),        
  ...Fashionproducts.map((p) => ({ ...p, id: p.id + 4000 })), 
  ];
  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  return (
    <>
    <SearchProducts
      title={`Search Results for "${query}"`}
      products={filteredProducts}
      />
      </>
  );
}
