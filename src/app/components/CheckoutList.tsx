"use client";
import Image from "next/image";
import ProductImage from "../assets/product.png";
import { useCart } from "../context/CartContext";

export function CheckoutList() {
  const {
      cartItems,
    } = useCart();

    
  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingCharges = 200; // static or dynamic
  const total = subTotal + shippingCharges;

  // const subtotal = 2500; 
  // const shippingCharges = 200;
  // const total = 3200; 

  return (
    <div className="space-y-4">
      {/* Cart Items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-3 py-2">
            <div className="relative rounded-md border border-[#E2E2E2]">
              <div className="absolute -top-1 -right-1 z-10 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center">
                {item.quantity}
              </div>
              <Image
                src={item.image}
                alt={item.name}
                width={60}
                height={60}
                className="rounded-md"
              />
            </div>
            <div className="flex-1 text-base font-semibold">
              <p>
                {item.name}, {item.weight}
              </p>
            </div>
            <div className="text-right text-base font-semibold">
              <p>Rs {item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Discount Code */}
      <div className="flex space-x-2 pt-2">
        <input type="text" placeholder="Discount code" className="flex-1 border border-[#E2E2E2] rounded-md px-3" />
        <button className="bg-gray-100 hover:bg-gray-200 px-10 py-2  rounded-md  text-gray-700 font-medium">
          Apply
        </button>
      </div>

      {/* Order Summary */}
      <div className="space-y-2 pt-2">
        <div className="flex justify-between text-gray-600">
          <span>Sub Total:</span>
          <span>Rs {subTotal}</span>
        </div>   
        <div className="flex justify-between text-gray-600">
          <span>Shipping Charges:</span>
          <span>Rs {shippingCharges}</span>
        </div>
        <div className="flex justify-between pt-4 mt-2 border-t border-[#C0C0C0] text-2xl font-bold text-gray-600">
          <span>Total</span>
          <span>Rs {total}</span>
        </div>
      </div>
    </div>
  );
}
