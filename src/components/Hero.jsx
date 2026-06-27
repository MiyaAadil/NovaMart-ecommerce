import React from 'react'
import KeyboardImage from '../assets/images/keyboard.avif'

const Hero = () => {
  return (
    <div className='bg-white mx-auto mt-5 p-6 md:p-12 lg:p-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10 rounded-2xl max-w-7xl'>
      
      {/* Left side content */}
      <div className='flex flex-col justify-between gap-6 md:gap-8 w-full md:w-1/2'>
        <div className='flex flex-col gap-4 text-center md:text-left'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight'>
            Innovation Meets <br className='hidden md:block' /> Everyday Shopping
          </h1>
          <p className='text-base sm:text-lg text-slate-600 max-w-md mx-auto md:mx-0'>
            Discover premium electronics at unbeatable prices.
          </p>
        </div>
        
        <div className='flex justify-center md:justify-start'>
          <button className='w-36 py-3 bg-blue-950 rounded-full text-white font-medium hover:bg-blue-900 cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg'>
            Shop Now →
          </button>
        </div>
      </div>

      {/* Right side content */}
      <div className='w-full md:w-1/2 flex justify-center items-center h-48 sm:h-64 md:h-80 lg:h-96 bg-slate-50 rounded-2xl p-4 overflow-hidden'>
        <img 
          className='h-full w-full object-contain object-center transform hover:scale-105 transition-transform duration-300' 
          src={KeyboardImage} 
          alt="Premium Keyboard Electronics" 
        />
      </div>
      
    </div>
  )
}

export default Hero;
