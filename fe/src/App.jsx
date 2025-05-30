import React from 'react'
import Navbar from './ui/Navbar'
import Hero from './ui/Hero'
import ThreeDCard from './ui/ThreeDCard'
// import TestimonialSection from './ui/Testimonials'
import Faq from './ui/Faq'
import Vision from './ui/Vision'
import Footer from './ui/Footer'


function App() {
  return (
    <div className='h-screen w-full bg-black text-white'>
      <Navbar />
      <Hero />
      <ThreeDCard />
      {/* <TestimonialSection /> */}
      <Faq />
      <Vision />
      <Footer />
    </div>
  )
}

export default App