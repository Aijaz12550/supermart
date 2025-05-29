import React from 'react'
import OrderTrackingForm from '../components/OrderTrackingForm'
import Footer from '../components/Footer'
import FeaturesSection from '../components/Feature-Section'
import Suggestion from '../components/Suggestion'
import Banner from '../components/Banner'

const page = () => {
  return (
    <div className=''>
    <div className="pt-12  flex items-center justify-center px-4">
      <OrderTrackingForm/>
    </div>
    <Suggestion />
    <FeaturesSection />
    <Banner />
    <Footer/>
</div>
  )
}

export default page
