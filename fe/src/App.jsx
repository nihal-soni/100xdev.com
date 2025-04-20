import React from 'react'
import Navbar from './ui/Navbar'
import Hero from './ui/Hero'
import ThreeDCard from './ui/ThreeDCard'


function App() {
  return (
    <div className='h-screen w-full bg-black text-white'>
      <Navbar />
      <Hero />
      <ThreeDCard />
    </div>
  )
}

export default App