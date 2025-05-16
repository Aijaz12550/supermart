"use client"
import React, { useState } from 'react'

const BillingForm = () => {
    const [billingMethod, setBillingMethod] = useState("cod")
    
  return (
    <>
     <section className="mb-6">
        <h2 className="text-lg font-medium mb-3">Billing Address</h2>

        <div>
          <label className="flex items-center p-3 border border-gray-300 rounded-md cursor-pointer mb-2">
            <input
              type="radio"
              name="billing"
              value="cod"
              checked={billingMethod === "cod"}
              onChange={() => setBillingMethod("cod")}
              className="h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-500"
            />
            <span className="ml-2">Cash On Delivery (COD)</span>
          </label>

          <label className="flex items-center p-3 border border-gray-300 rounded-md cursor-pointer">
            <input
              type="radio"
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
      
    </>
  )
}

export default BillingForm
