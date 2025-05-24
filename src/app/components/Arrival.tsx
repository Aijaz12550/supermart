"use client";
import Image, { StaticImageData } from 'next/image';
import Arrowslider from "../Reusable_Components/Arrow-Slider";
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { LoaderIcon } from './Icon';

interface Product {
  id: number;
  name: string;
  image: StaticImageData;
  description?: string;
  price: string;
}

interface ProductGridProps {
  title: string;
  products: Product[];
}

export default function Arrival({ title, products }: ProductGridProps) {
  const { addToCart } = useCart();
  const [loadingId, setLoadingId] = useState<number | null>(null);
  
  const parsePrice = (priceStr: string): number => {
    return parseInt(priceStr.replace(/[^\d]/g, ""), 10);
  };

  const handleAddToCart = async (product: Product) => {
    setLoadingId(product.id);
    await new Promise((resolve) => setTimeout(resolve, 800));
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

  

  const categories = ["All", "Groceries", "Electronics", "Fashion", "Healthcare"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className='flex justify-between'>
        <h1 className="text-4xl font-bold mb-8">New Arrival</h1>
        <div className="space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              className="text-xl font-light px-2 py-1 transition-colors cursor-pointer"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <h3 className="font-light text-gray-800 text-base h-10">{product.name}</h3>
              {product.description && (
                <p className="text-gray-600 text-xs mb-2">{product.description}</p>
              )}
              <div className="flex justify-between items-center mt-2">
                <span className="font-semibold text-gray-900 text-base">{product.price}</span>
                <button
                  onClick={() => handleAddToCart(product)}
                  disabled={loadingId === product.id}
                  className="text-black text-xs py-1 px-2 rounded transition-colors duration-200 border-2 border-gray-100 cursor-pointer flex items-center gap-2"
                >
                  {loadingId === product.id ? (
                    <LoaderIcon/>
                  ) : (
                    "Add to cart"
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Arrowslider/>
    </div>
  );
}