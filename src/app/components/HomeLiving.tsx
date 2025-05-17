import React from 'react'
import ProductGrid from '../Reusable_Components/ProductGrid'
import { Gadgetproducts } from '../assets/data'

const HomeLiving = () => {
  return (
    <div>
      <ProductGrid title='Home & Living' products={Gadgetproducts}/>
    </div>
  )
}

export default HomeLiving
