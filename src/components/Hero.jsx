import React from 'react'
import KeyboardImage from '../assets/images/keyboard.avif'

const Hero = () => {
  return (
    <div className='bg-[#0F172A] text-white m-10 p-10 flex justify-between gap-5 rounded-2xl min-h-[70vh]'>
      {/* Left side content */}
      <div className='flex flex-col gap-5 w-300'>
        <h1 className='text-7xl font-bold'>Innovation Meets <br /> Everyday Shopping</h1>
        <p className='max-w-md'>Discover premium electronics at unbeatable prices.</p>
        <button className='w-30 py-2 bg-blue-900 p-1 rounded-full text-white hover:bg-blue-950 cursor-pointer'>Shop Now →</button>
      </div>

    {/* Right side content */}
      <div className='w-300 rounded-2xl overflow-hidden'>
        <img className='h-full w-200 object-cover' src={KeyboardImage} alt="" />
      </div>
    </div>
  )
}

export default Hero
