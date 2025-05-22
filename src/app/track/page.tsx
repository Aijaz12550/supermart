import React from 'react'
import OrderTrackingForm from '../components/OrderTrackingForm'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
    <div className="pt-12  flex items-center justify-center px-4">
      <OrderTrackingForm/>
    </div>
    <Footer/>
</>
  )
}

export default page
