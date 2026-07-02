import { Link } from 'react-router-dom'
import KeyboardImage from '../assets/images/keyboard.avif'
import Headphone from '../assets/images/headphone.png'
import Mac from '../assets/images/mac.jpg'
import Airbud from '../assets/images/airbud.png'
import { ArrowUpRight, CirclePlay, MoveRight  } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
  return (
    <div className='flex flex-1
                    lg:p-10 lg:gap-4 lg:-mt-2'>

        <div className='flex mx-5 bg-slate-100 rounded-3xl
                    md:mx-10 md:p-10 md:w-[60%]
                    lg:w-[80%] lg:mx-0'>
          
          {/* Left side content */}
            <div className='flex flex-col w-[60%] justify-between gap-6    md:gap-8
                          lg:flex'>
            <div className='bg-white shadow-md cursor-pointer rounded-full p-3 px-4 flex items-center gap-1 w-41'>
              <button className='cursor-pointer'>Music is Classic</button>
              <CirclePlay size={20} strokeWidth={1.25} />
            </div>
            <div className='flex flex-col gap-8 md:text-left -mt-5'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-17'>
                Innovation Meets <br className='hidden md:block' /> Everyday Shopping
              </h1>
              <p className='text-base sm:text-lg text-slate-600 max-w-md mx-auto md:mx-0'>
                Discover premium electronics at unbeatable prices.
              </p>
            </div>  

              <Link to='/products' className='w-37 py-2.5 px-3 bg-[#DFFE76] rounded-full font-medium hover:bg-[#DFFE80] cursor-pointer hover:scale-101 transition-all duration-200 shadow-md hover:shadow-lg flex gap-2 justify-between'>
              <button className='cursor-pointer'>
                Shop Now 
              </button>
              <div className='bg-black text-white p-2 rounded-full'>
                <MoveRight className='' size={17} />
              </div>
              </Link>
              <div className='flex gap-3 items-center text-gray-500'>
                <p>Follow us on</p>
                <FontAwesomeIcon icon={faFacebook} className='bg-white p-1 rounded-full cursor-pointer' />
                <FontAwesomeIcon icon={faInstagram} className='bg-white p-1 rounded-full cursor-pointer' />
                <FontAwesomeIcon icon={faLinkedin} className='bg-white p-1 rounded-full cursor-pointer' />
                <FontAwesomeIcon icon={faXTwitter} className='bg-white p-1 rounded-full cursor-pointer' />
              </div>
          </div>

          {/* Right side content */}
          <div className='
                          lg:w-[50%] lg: flex'>
            <img 
              className='object-contain transform cursor-pointer hover:scale-105 transition-transform duration-500
              lg:' 
              src={Headphone} 
              alt="Premium Keyboard Electronics" 
            />
          </div>
          
        </div>

          {/* Extreme right side two divs */}
          <div className='flex flex-col gap-4
                          md:w-[24%]'>

            <div className='bg-slate-100 rounded-4xl h-[40%] w-auto flex justify-between'>

              <div className='p-4 flex flex-col justify-between'>
                  <h1 className='text-xl font-semibold'>New Gen <br /> Airbuds</h1>
                  <Link to='products'><button className='bg-white rounded-full p-2 w-13 cursor-pointer hover:shadow-md transition-shadow'><ArrowUpRight size={36} strokeWidth={1.2} /></button>
                  </Link>
                  
              </div>

              <div className='h-full'>
                <img src={Airbud} alt="airbud" className='h-full object-contain hover:scale-105 transition-all duration-500' />
              </div>

            </div>

            <div className='bg-slate-100 rounded-4xl h-[60%] w-auto overflow-hidden relative'>

                  <div className='flex flex-col p-4 justify-between absolute w-full z-10 bottom-0'>
                    <h1 className='font-semibold text-xl'>Monitor</h1>
                    <p className='text-gray-700 text-sm'>Smooth performance</p>
                  </div>

                  <Link to='products'>
                  <button className='bg-gray-200/40 rounded-full p-2 w-13 cursor-pointer absolute z-10 right-0 m-2 hover:shadow-md transition-shadow'><ArrowUpRight size={36} strokeWidth={1.2} /></button>
                  </Link>
                 

              <img src={Mac} alt="Mac image" className='h-full w-full object-cover hover:scale-105 transition-all duration-500 cursor-pointer' />
              
            </div>
          </div>
    </div>
  )
}

export default Hero;
