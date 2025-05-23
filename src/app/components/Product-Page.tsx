"use client"
import Image from "next/image"
import ProductImage from "../assets/product.png"
import Breadcrumbs from "../Reusable_Components/BreadCrumbs"
import ServiceFeatures from "../Reusable_Components/ServiceFeatures"
import ProductDescription from "../Reusable_Components/ProductDescription"
import { useProduct, sampleProducts } from "../context/ProductContext"
import { useEffect } from "react"

export default function ProductPage() {
  const {
    selectedProduct,
    setSelectedProduct,
    selectedWeight,
    setSelectedWeight,
    quantity,
    setQuantity
  } = useProduct();

  useEffect(() => {
    // Set initial product if none is selected
    if (!selectedProduct) {
      setSelectedProduct(sampleProducts[0]);
    }
  }, [selectedProduct, setSelectedProduct]);

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  const handleQuantityChange = (change: number) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Product Images */}
        <div className="md:col-span-1">
          <div className="border rounded-lg overflow-hidden mb-4 sm:max-w-md md:max-w-xl">
            <Image
              src={selectedProduct.image}
              alt={selectedProduct.name}
              width={400}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {selectedProduct.thumbnails.map((thumbnail, i) => (
              <button
                key={i}
                className="border rounded-md p-1 hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={() => setSelectedProduct({ ...selectedProduct, image: thumbnail })}
              >
                <Image
                  src={thumbnail}
                  alt={`${selectedProduct.name} thumbnail ${i + 1}`}
                  width={60}
                  height={60}
                  className="w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:col-span-1">
          <div className="flex items-center mb-2">
            <h2 className="text-2xl font-medium text-gray-900 mr-2">Fresh Basket</h2>
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">In Stock</span>
          </div>
          <h1 className="text-3xl font-medium text-gray-900 mb-4">{selectedProduct.name}</h1>
          <div className="text-4xl font-bold text-gray-900 mb-4">Rs {selectedProduct.price}</div>

          <p className="text-gray-500 mb-6 font-light text-base">There are many variations of passages of Lorem Ipsum and available.</p>

          <div className="flex items-center space-x-4 mb-6 font-medium text-sm">
            <button className="px-4 py-2 border rounded-md hover:bg-gray-50 cursor-pointer">250 G</button>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-md cursor-pointer">500 G</button>
            <button className="px-4 py-2 border rounded-md hover:bg-gray-50 cursor-pointer">1kg</button>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 font-light text-sm">Quantity</span>
              <div className="flex items-center border rounded-md">
                <button className="px-3 py-1 text-gray-500 cursor-pointer">−</button>
                <input type="number" min="1" value="2" className="w-10 text-center border-x py-1" readOnly />
                <button className="px-3 py-1 text-gray-500 cursor-pointer">+</button>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex items-center text-base">
              <span className="text-gray-700 w-24 font-light">Delivery:</span>
              <span className="text-gray-900 font-medium">Nationwide</span>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 w-24 font-light ">Shipped By:</span>
              <span className="text-gray-900 font-medium">SuperMart</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-medium text-xl cursor-pointer">
              Add to Cart
            </button>
            <button className="border border-green-500 text-green-500 hover:bg-green-50 py-3 rounded-md font-medium transition-colors cursor-pointer">
              Buy It Now
            </button>
          </div>
        </div>

        <ServiceFeatures />
      </div>

      <ProductDescription />
    </div>
  )
}
