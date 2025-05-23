"use client";
import Image, { StaticImageData } from "next/image";
import Arrowslider from "../Reusable_Components/Arrow-Slider";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { LoaderIcon } from "../components/Icon";

interface Product {
  id: number;
  name: string;
  image: StaticImageData;
  description?: string;
  price: string; // e.g., "Rs 200"
}

interface ProductGridProps {
  title: string;
  products: Product[];
}

export default function ProductGrid({ title, products }: ProductGridProps) {
  const { addToCart } = useCart();
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const parsePrice = (priceStr: string): number => {
    return parseInt(priceStr.replace(/[^\d]/g, ""), 10);
  };

  const handleAddToCart = async (product: Product) => {
    setLoadingId(product.id);
    await new Promise((resolve) => setTimeout(resolve, 800)); // simulate delay
    addToCart({
      id: product.id,
      name: product.name,
      weight: 500,
      price: parsePrice(product.price),
      quantity: 1,
      inStock: true,
      image: product.image,
    });
    setLoadingId(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-4">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-52 object-contain mb-4"
              />
              <h3 className="font-semibold text-gray-800 text-sm h-10">
                {product.name}
              </h3>
              {product.description && (
                <p className="text-gray-600 text-xs mb-2">
                  {product.description}
                </p>
              )}
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold text-gray-900">{product.price}</span>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={loadingId === product.id}
                  className="text-black text-xs py-1 px-2 rounded transition-colors duration-200 border-2 border-gray-100 cursor-pointer flex items-center gap-2"
                >
                  {loadingId === product.id ? <LoaderIcon /> : "Add to cart"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Arrowslider />
    </div>
  );
}
