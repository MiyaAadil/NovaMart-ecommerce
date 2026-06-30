import { Link } from 'react-router-dom'
import KeyboardImage from '../assets/images/keyboard.avif'
import Headphone from '../assets/images/headphone.png'
import { ArrowUpRight, CirclePlay } from 'lucide-react'

const Hero = () => {
  return (
    <div className='flex
                    lg:p-10 lg:gap-5'>
      <div className='flex mx-5 bg-slate-100 rounded-3xl
                    md:mx-10 md:p-10 md:w-[60%]
                    lg:w-[80%] lg:mx-0'>
          
          {/* Left side content */}
          <div className='flex flex-col w-[50%] justify-between gap-6    md:gap-8
                          lg:flex'>
            <div className='bg-gray-200 rounded-full p-3 px-4 flex items-center gap-1 w-41'>
              <button className=''>Music is Classic</button>
              <CirclePlay size={20} strokeWidth={1.25} />
            </div>
            <div className='flex flex-col gap-8 md:text-left'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-17'>
                Innovation Meets <br className='hidden md:block' /> Everyday Shopping
              </h1>
              <p className='text-base sm:text-lg text-slate-600 max-w-md mx-auto md:mx-0'>
                Discover premium electronics at unbeatable prices.
              </p>
            </div>  

              <Link to='/products' className='w-35'>
              <button className='w-36 py-3 bg-[#DFFE76] rounded-full font-medium hover:bg-[#DFFE80] cursor-pointer hover:scale-101 transition-all duration-200 shadow-md hover:shadow-lg'>
                Shop Now →
              </button>
              </Link>
          </div>

          {/* Right side content */}
          <div className='w-[60%]
                          md:'>
            <img 
              className='object-contain transform cursor-pointer hover:scale-105 transition-transform duration-300
              lg:' 
              src={Headphone} 
              alt="Premium Keyboard Electronics" 
            />
          </div>
          
        </div>

          <div className='w-[20%] flex flex-col gap-4
                          md:w-[24%]'>
            <div className='bg-slate-100 rounded-4xl h-[25%] w-full'>
              <h1 className='p-4 text-xl font-semibold'>Popular Colors</h1>
            </div>

            <div className='bg-slate-100 rounded-4xl h-[35%] w-auto p-4 flex flex-col justify-between'>
              <h1 className='text-xl font-semibold'>New Gen <br /> X-Bud</h1>
              <button className='bg-white rounded-full p-2 w-13 cursor-pointer'><ArrowUpRight size={36} strokeWidth={1.2} /></button>
            </div>

            <div className='bg-slate-100 rounded-4xl h-[40%] w-auto'></div>
          </div>
    </div>
  )
}

export default Hero;
