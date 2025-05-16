import Image from "next/image"
import Link from "next/link"
import FreshVegetables from "../assets/fresh-vegetables.jpg"
import BeautyProducts from "../assets/beauty-products.jpg"


export default function PromoCards() {
  return (
    <div className="flex flex-col md:flex-row gap-4 mx-auto p-4">
      {/* Fresh Vegetables Card */}
      <div className="relative flex-1 overflow-hidden rounded-lg bg-gray-100">
        <div className="relative z-10 p-6 flex flex-col h-full">
          <p className="text-base font-light text-gray-700 mb-1">Enjoy upto 20% Off on</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-auto">
            Fresh
            <br />
            Vegetables
          </h2>
          <Link
            href="#"
            className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-light  w-fit"
          >
            Shop Now
          </Link>
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            src={FreshVegetables}
            alt="Fresh vegetables and fruits with a paper bag"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Beauty Products Card */}
      <div className="relative flex-1 overflow-hidden rounded-lg bg-pink-100">
        <div className="relative z-10 p-6 flex flex-col h-full">
          <p className="text-sm text-gray-700 mb-1">Enjoy upto 20% Off on</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-auto">
            Beauty and
            <br />
            Lifestyle Products
          </h2>
          <Link
            href="#"
            className="inline-block mt-4 bg-white hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-md text-sm font-medium transition-colors border border-gray-200 w-fit"
          >
            Shop Now
          </Link>
        </div>
        <div className="absolute inset-0 z-0">
          <Image
            src={BeautyProducts}
            alt="Beauty and lifestyle products on pink background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}
