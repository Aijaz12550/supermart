"use client"

import { useState } from "react"
import DeliveryForm from "../Reusable_Components/DeliveryForm"
import PaymentForm from "../Reusable_Components/PaymentForm"
import BillingForm from "../Reusable_Components/BillingForm"

export default function CheckoutForm() {
  const [emailSubscription, setEmailSubscription] = useState(false)

  return (
    <div className="mx-auto">
      {/* Contact Section */}
      <section className="mb-6">
        <h2 className="text-lg font-medium mb-3">Contact</h2>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Email or Mobile Phone Number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="emailSubscription"
            checked={emailSubscription}
            onChange={() => setEmailSubscription(!emailSubscription)}
            className="h-4 w-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
          />
          <label htmlFor="emailSubscription" className="ml-2 text-sm">
            Email me with news and offers
          </label>
        </div>
      </section>

      {/* Delivery Section */}
      <DeliveryForm/>

      {/* Payment Section */}
      <PaymentForm/>

      {/* Billing Address Section */}
      <BillingForm/>
    </div>
  )
}
