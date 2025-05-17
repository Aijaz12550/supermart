import React from 'react'
import ProductGrid from '../Reusable_Components/ProductGrid'
import { Fashionproducts } from '../assets/data'

const Fashion = () => {
  return (
    <div>
      <ProductGrid title='Fashion Product'  products={Fashionproducts}/>
    </div>
  )
}

export default Fashion
