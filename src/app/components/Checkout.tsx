"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import DeliveryForm from "../Reusable_Components/DeliveryForm";
import PaymentForm from "../Reusable_Components/PaymentForm";
import BillingForm from "../Reusable_Components/BillingForm";

type CheckoutFormData = {
  contact: string
}

export default function CheckoutForm() {
  const methods = useForm<CheckoutFormData>();
  const [emailSubscription, setEmailSubscription] = useState(false);

  const onSubmit = (data: any) => {
    const trackingId = Math.random().toString(36).substring(2, 6).toUpperCase();
    localStorage.setItem("tracking_id", trackingId);
    alert(`Order placed! Your tracking ID is: ${trackingId}`);
    console.log("Form Data", data);
  };

  const {
    register,
    formState: { errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="mx-auto">
        {/* Contact Section */}
        <section className="mb-6">
          <h2 className="text-lg font-medium mb-3">Contact</h2>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Email or Mobile Phone Number"
              {...register("contact", { required: "Contact info is required" })}
              className={`w-full p-3 border rounded-md focus:outline-none 
        ${
          errors.contact
            ? "border-red-500 ring-2 ring-red-300"
            : "border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
        }
      `}
            />
            {errors.contact?.message  && (
              <p className="text-red-500 text-sm mt-1">
                {errors.contact.message}
              </p>
            )}
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="emailSubscription"
              checked={emailSubscription}
              onChange={() => setEmailSubscription(!emailSubscription)}
              className="h-4 w-4 text-orange-500 border-gray-300 rounded"
            />
            <label htmlFor="emailSubscription" className="ml-2 text-sm">
              Email me with news and offers
            </label>
          </div>
        </section>

        {/* Delivery Section */}
        <DeliveryForm />

        {/* Payment Section */}
        <PaymentForm />

        {/* Billing Address Section */}
        <BillingForm />
      </form>
    </FormProvider>
  );
}
