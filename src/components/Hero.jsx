import { Link } from 'react-router-dom'
import KeyboardImage from '../assets/images/keyboard.avif'

const Hero = () => {
  return (
    <div className='flex mx-5 md:mx-10 mt-5 gap-3'>

        <div className='bg-gray-100 p-6 md:p-12 lg:p-16 flex flex-col-reverse rounded-4xl'>
          
          {/* Left side content */}
          <div className='flex flex-col justify-between gap-6 md:gap-8'>
            <div className='flex flex-col gap-4 text-center md:text-left'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight'>
                Innovation Meets <br className='hidden md:block' /> Everyday Shopping
              </h1>
              <p className='text-base sm:text-lg text-slate-600 max-w-md mx-auto md:mx-0'>
                Discover premium electronics at unbeatable prices.
              </p>
            </div>  

              <Link to='/products'>
              <button className='w-36 py-3 bg-blue-950 rounded-full text-white font-medium hover:bg-blue-900 cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg'>
                Shop Now →
              </button>
              </Link>
          </div>

          {/* Right side content */}
          <div className=''>
            <img 
              className='rounded-2xl sm:rounded-xl object-contain object-center transform hover:scale-105 transition-transform duration-300 h-50 w-50' 
              src={KeyboardImage} 
              alt="Premium Keyboard Electronics" 
            />
          </div>
          
        </div>

        <div className='flex flex-col gap-3'>
              <div className='h-40 w-40 bg-white rounded-3xl'></div>

              <div className='h-50 bg-white rounded-3xl'></div>

              <div className='h-55 bg-white rounded-3xl'></div>
        </div>

    </div>
  )
}

export default Hero;
