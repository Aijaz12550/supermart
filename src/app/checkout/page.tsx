import React from 'react'
import CheckoutForm from '../components/Checkout'
import { CheckoutList } from '../components/CheckoutList'

const Page = () => {
  return (
    <main className="min-h-screen">
      <div className="max-w-7xl p-4 md:p-8">
        <div className="flex flex-col md:flex-row justify-between  gap-8">
          {/* Left side - Checkout Form */}
          <div className="flex-1 lg:flex-2">
            <CheckoutForm />
          </div>
          
          {/* Right side - Order Summary */}
          <div className="flex-1 ">
              <CheckoutList />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page