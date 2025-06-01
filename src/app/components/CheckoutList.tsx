"use client";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export function CheckoutList() {
  const { cartItems } = useCart();
  const [discountCode, setDiscountCode] = useState("");
  const [appliedCode, setAppliedCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);

  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shippingCharges = 200;
  const total = subTotal + shippingCharges - discountAmount;

  const applyDiscount = () => {
    const code = discountCode.trim().toUpperCase();

    if (code === "CODE A") {
      const discount = 0.1 * (subTotal + shippingCharges);
      setDiscountAmount(discount);
      setAppliedCode(code);
    } else if (code === "CODE B") {
      setDiscountAmount(10);
      setAppliedCode(code);
    } else {
      setDiscountAmount(0);
      setAppliedCode("");
      alert("Invalid discount code");
    }
  };

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
        <input
          type="text"
          value={discountCode}
          placeholder="Discount code"
          className="flex-1 border border-[#E2E2E2] rounded-md px-3"
          onChange={(e) => setDiscountCode(e.target.value)}
        />
        <button 
        onClick={applyDiscount}
        className="bg-gray-100 hover:bg-gray-200 px-10 py-2  rounded-md  text-gray-700 font-medium">
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
        {discountAmount > 0 && (
          <div className="flex justify-between font-medium">
            <span>Discount ({appliedCode}):</span>
            <span> Rs {discountAmount.toFixed(0)}</span>
          </div>
        )}
        <div className="flex justify-between pt-4 mt-2 border-t border-[#C0C0C0] text-2xl font-bold text-gray-600">
          <span>Total</span>
          <span>Rs {total}</span>
        </div>
      </div>
    </div>
  );
}
