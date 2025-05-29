"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  products,
  Beautyproducts,
  Gadgetproducts,
  Fashionproducts,
} from "../assets/data";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  thumbnails: string[];
}

interface ProductContextType {
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product) => void;
  selectedWeight: string;
  setSelectedWeight: (weight: string) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Convert all products to the required format
const convertToDetailedProduct = (product: any): Product => ({
  id: product.id.toString(),
  name: product.name,
  price: parseInt(product.price.replace(/[^\d]/g, ""), 10),
  image: product.image.src,
  thumbnails: [
    product.image.src,
    product.image.src,
    product.image.src,
    product.image.src,
  ],
});

export const sampleProducts: Product[] = [
  ...products.map(convertToDetailedProduct),
  ...Beautyproducts.map(convertToDetailedProduct),
  ...Gadgetproducts.map(convertToDetailedProduct),
  ...Fashionproducts.map(convertToDetailedProduct),
];

export function ProductProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedWeight, setSelectedWeight] = useState<string>("500 G");
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <ProductContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        selectedWeight,
        setSelectedWeight,
        quantity,
        setQuantity,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
}
