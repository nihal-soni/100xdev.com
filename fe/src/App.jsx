import React from 'react'
import Navbar from './ui/Navbar'
import Hero from './ui/Hero'
import Course from './ui/Courses'

function App() {
  return (
    <div className='h-screen w-full bg-black text-white'>
      <Navbar />
      <Hero />
      <Course />
    </div>
  )
}

export default App