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
    /* Main Layout: Stacked vertically on mobile, changes to an aligned side-by-side flex layout on desktop */
    <div className='flex flex-col lg:flex-row p-4 md:p-10 gap-6 w-full mt-2 lg:mt-0 mx-auto items-stretch'>

      {/* Main Big Banner Left Side */}
      {/* Mobile: takes full width. Desktop (lg): Takes up major portion using flex-1 */}
      <div className='bg-slate-100 rounded-3xl p-6 md:p-10 flex flex-col-reverse sm:flex-row justify-between items-center gap-6 flex-[2.5] min-w-0'>
        
        {/* Left Side Content Column */}
        <div className='flex flex-col justify-between gap-6 md:gap-8 w-full sm:w-[60%] min-w-0'>
          
          {/* Badge Button */}
          <div className='bg-white shadow-sm rounded-full p-2 px-4 flex items-center justify-between gap-2 w-fit max-w-full'>
            <span className='text-xs font-medium text-slate-700 whitespace-nowrap'>Music is Classic</span>
            <CirclePlay size={18} className="text-slate-800 flex-shrink-0" strokeWidth={1.5} />
          </div>

          {/* Text Content */}
          <div className='flex flex-col gap-4 text-left'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight tracking-tight break-words'>
              Innovation Meets <br className='hidden sm:block' /> Everyday Shopping
            </h1>
            <p className='text-sm sm:text-base text-slate-600 max-w-md'>
              Discover premium electronics at unbeatable prices.
            </p>
          </div>  

          {/* Action Call Button */}
          <Link to='/products' className='w-fit py-2.5 px-4 bg-[#DFFE76] rounded-full font-medium hover:bg-[#c5e460] cursor-pointer hover:scale-102 transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-3 self-start'>
            <span className='text-sm text-slate-900 font-semibold'>Shop Now</span>
            <div className='bg-black text-white p-1.5 rounded-full flex items-center justify-center'>
              <MoveRight size={14} />
            </div>
          </Link>

          {/* Brand Social Media Connections */}
          <div className='flex gap-3 items-center text-gray-500 text-sm flex-wrap mt-2'>
            <p className="text-xs whitespace-nowrap">Follow us on</p>
            <div className="flex gap-2">
              <a href="#" className="bg-white hover:bg-gray-50 p-2 rounded-full shadow-sm text-slate-700 transition-colors flex items-center justify-center w-8 h-8"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" className="bg-white hover:bg-gray-50 p-2 rounded-full shadow-sm text-slate-700 transition-colors flex items-center justify-center w-8 h-8"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#" className="bg-white hover:bg-gray-50 p-2 rounded-full shadow-sm text-slate-700 transition-colors flex items-center justify-center w-8 h-8"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="#" className="bg-white hover:bg-gray-50 p-2 rounded-full shadow-sm text-slate-700 transition-colors flex items-center justify-center w-8 h-8"><FontAwesomeIcon icon={faXTwitter} /></a>
            </div>
          </div>
        </div>

        {/* Big Product Visual (Headphones) */}
        <div className='w-[60%] sm:w-[40%] flex justify-center items-center max-h-60 sm:max-h-full'>
          <img 
            className='object-contain w-full h-full max-h-70 transform hover:scale-105 transition-transform duration-500' 
            src={Headphone} 
            alt="Premium Headphones Electronics" 
          />
        </div>
        
      </div>

      {/* Extreme Right Side Sub-Widgets Side-Panel */}
      {/* Mobile: Display side-by-side or stacked grid. Desktop: Column block stack layout */}
      <div className='flex flex-col sm:flex-row lg:flex-col gap-4 flex-1 w-full'>

        {/* Box Item 1: Airbuds Widget */}
        <div className='bg-slate-100 rounded-3xl p-5 flex justify-between items-center flex-1 min-h-[160px]'>
          <div className='flex flex-col justify-between h-full gap-4'>
            <h2 className='text-lg font-bold text-slate-900 leading-snug'>New Gen <br /> Airbuds</h2>
            <Link to='/products'>
              <button className='bg-white text-slate-800 rounded-full p-2.5 w-10 h-10 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md transition-shadow'>
                <ArrowUpRight size={20} strokeWidth={2} />
              </button>
            </Link>
          </div>
          <div className='h-50 w-50 flex-shrink-0'>
            <img src={Airbud} alt="airbud" className='h-full w-full object-contain hover:scale-105 transition-all duration-500' />
          </div>
        </div>

        {/* Box Item 2: Monitor Card Widget */}
        <div className='bg-slate-100 rounded-3xl overflow-hidden relative flex-1 min-h-[180px] group'>
          
          {/* Action Link Anchor Tag floating right corner */}
          <Link to='/products' className="absolute z-20 top-3 right-3">
            <button className='bg-white/80 backdrop-blur-xs text-slate-800 rounded-full p-2.5 w-10 h-10 flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md transition-shadow'>
              <ArrowUpRight size={20} strokeWidth={2} />
            </button>
          </Link>
          
          {/* Floating Lower Labels Text Box Context Layer */}
          <div className='flex flex-col p-5 absolute z-10 bottom-0 left-0 bg-linear-to-t from-slate-900/40 to-transparent w-full pt-10'>
            <h2 className='font-bold text-lg text-slate-900'>Monitor</h2>
            <p className='text-slate-700 text-xs font-medium'>Smooth performance</p>
          </div>

          {/* Underlying Background Monitor Image layer graphic component */}
          <img src={Mac} alt="Mac monitor image" className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105' />
        </div>

      </div>
    </div>
  )
}

export default Hero;
