"use client";
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { useRouter } from "next/navigation"; // ✅ for App Router

const BillingForm = () => {
  const [billingMethod, setBillingMethod] = useState("cod");
  const { register, handleSubmit } = useFormContext();

  const router = useRouter(); // ✅

  const generateShortTrackingId = () => {
    const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${randomPart}`;
  };

  const onSubmit = (data: any) => {
    console.log("Form Data:", data); // for debug
    const trackingId = generateShortTrackingId();
    localStorage.setItem("tracking_id", trackingId);
    alert(`Order placed! Your tracking ID is: ${trackingId}`);
    router.push("/track"); // ✅ redirect after alert

  };

  return (
    <>
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-3">Billing Address</h2>

        <div>
          <label
            className={`flex items-center p-3 border rounded-md cursor-pointer mb-2
    ${billingMethod === "cod" ? "border-green-500" : "border-gray-300"}`}
          >
            <input
              type="radio"
              {...register("billingMethod")}
              name="billing"
              value="cod"
              checked={billingMethod === "cod"}
              onChange={() => setBillingMethod("cod")}
              className="h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500"
            />
            <span className="ml-2">Cash On Delivery (COD)</span>
          </label>

          <label
            className={`flex items-center p-3 border rounded-md cursor-pointer mb-2
    ${billingMethod === "card" ? "border-green-500" : "border-gray-300"}`}
          >
            <input
              type="radio"
              {...register("billingMethod")}
              name="billing"
              value="card"
              checked={billingMethod === "card"}
              onChange={() => setBillingMethod("card")}
              className="h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500"
            />
            <span className="ml-2">Pay with card upon delivery</span>
          </label>
        </div>
      </section>
      <button
        onClick={handleSubmit(onSubmit)}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Complete order
      </button>
    </>
  );
};

export default BillingForm;
