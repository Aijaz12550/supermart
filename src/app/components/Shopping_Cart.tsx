"use client";

import Image from "next/image";
import {
  AddIcon,
  MinusIcon,
  DeleteIcon,
  CartDeleteIcon,
} from "../components/Icon";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import { cartHeadings } from "../assets/data";

export default function ShoppingCart() {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 200; // static or dynamic
  const total = subTotal + shipping;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">Shopping Cart</h1>
        <button
          onClick={clearCart}
          className="text-gray-500 font-light text-base flex items-center gap-1 cursor-pointer"
        >
          <span className="text-gray-400">
            <CartDeleteIcon />
          </span>
          Clear All Cart
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 ">
        <div className="overflow-x-auto">
          <div className="bg-[#D9D9D9] min-w-[768px] lg:min-w-0 rounded-lg">
            <div className="grid grid-cols-12 py-3 px-4 font-medium text-xl">
              {cartHeadings.map((heading, index) => (
                <div key={index} className={`col-span-${heading.colSpan}`}>
                  {heading.label}
                </div>
              ))}
            </div>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-12 py-6 px-4 border-b border-gray-100 items-center min-w-[768px]"
            >
              <div className="col-span-5 flex gap-3">
                <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-base">{item.name}</h3>
                  <div className="flex items-center text-xs font-light">
                    <p className="text-gray-500">Weight: {item.weight}</p>
                    <p className="px-2">|</p>
                    <p className="text-green-600 text-center">In Stock</p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 font-medium text-base">
                Rs {item.price}
              </div>
              <div className="col-span-2">
                <div className="flex items-center border rounded-md w-24">
                  <button
                    className="px-2 py-1 cursor-pointer"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    <MinusIcon />
                  </button>
                  <div className="flex-1 text-center font-light text-sm">
                    {item.quantity.toString().padStart(2, "0")}
                  </div>
                  <button
                    className="px-2 py-1 cursor-pointer"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    <AddIcon />
                  </button>
                </div>
              </div>
              <div className="col-span-2 text-base font-medium">
                Rs {item.price * item.quantity}
              </div>
              <div className="col-span-1">
                <button
                  className="text-orange-500 flex items-center gap-1 font-medium text-base cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                >
                  <DeleteIcon />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-80 border border-gray-100 rounded-lg p-4 h-fit">
          <h2 className="font-medium text-xl mb-4">Your Order Details</h2>
          <div className="flex justify-between mb-2 font-medium text-base">
            <span className="text-gray-600">Sub Total</span>
            <span>Rs {subTotal}</span>
          </div>
          <div className="flex justify-between mb-4 font-medium text-base">
            <span className="text-gray-600">Shipping Charges</span>
            <span>Rs {shipping}</span>
          </div>
          <div className="border-b border-gray-100"></div>
          <div className="flex justify-between font-medium text-base my-4">
            <span>Total</span>
            <span>Rs {total}</span>
          </div>
          <Link href="/checkout">
          <button className="w-full bg-green-500 text-white py-2 rounded-md mb-2 font-medium text-base cursor-pointer">
            Go to Checkout
          </button>
          </Link>
          <Link href="/">
            <button className="w-full text-center text-gray-600 font-medium text-base cursor-pointer">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
