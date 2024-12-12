import React from 'react'
import HeroSection from './Hero'
import ProductDetail from './shopdetail'
import { KeyBenefits, ProductDescription, SimilarProducts } from './sections'

const shopDetails = () => {
  return (
    <div>
        <HeroSection />
        <ProductDetail />
        <ProductDescription />
        <KeyBenefits />
        <SimilarProducts />
    </div>
  )
}

export default shopDetails