"use client";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";

const PaymentForm = () => {
  const { register } = useFormContext()
  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <>
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-1">Payment</h2>
        <p className="text-xs text-gray-500 mb-3">
          All transactions are secure and encrypted.
        </p>

        <div className="mb-3">
          <label
            className={`flex items-center p-3 border rounded-md cursor-pointer mb-2
    ${paymentMethod === "cod" ? "border-green-500" : "border-gray-300"}`}
          >
            <input
              type="radio"
              {...register("paymentMethod")}
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
              className="h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500"
            />
            <span className="ml-2">Cash On Delivery (COD)</span>
          </label>

          <label
            className={`flex items-center p-3 border rounded-md cursor-pointer mb-2
    ${paymentMethod === "card" ? "border-green-500" : "border-gray-300"}`}
          >
            <input
              type="radio"
              {...register("paymentMethod")}
              name="payment"
              value="card"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
              className="h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500"
            />
            <span className="ml-2">Pay with card upon delivery</span>
          </label>
        </div>
      </section>
    </>
  );
};

export default PaymentForm;
