import React from 'react'
import HeroSection from './Hero'
import ErrorPage from './404error'

const page = () => {
  return (
    <div>
      <HeroSection />
      <ErrorPage />
    </div>
  )
}

export default page