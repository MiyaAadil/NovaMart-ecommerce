import { Link } from 'react-router-dom'
import { Search, ShoppingCart } from 'lucide-react';
import NavLogo from '../assets/images/Novalogo.png'


const Navbar = () => {
  return (
      <nav className='text-white flex justify-between px-5 items-center h-16 w-full sticky top-0 z-50 bg-gray-100/10'>

        <Link to='/'><img src={NavLogo} alt="Brand logo" className='h-15' /></Link>

        <div className='flex items-center gap-2'>
          <input className='bg-white h-10 rounded-full w-64 text-black p-3' type="text" placeholder='Search products...' />
          <button className='cursor-pointer hover:bg-white
          p-2 rounded-full hover:text-black transition-all duration-200'><Search /></button>
        </div>

        <div className='flex justify-between gap-5'>
          <Link className='hover:bg-white hover:text-black p-2 rounded-full transition-all duration-200' to="/">Home</Link>
          <Link className='hover:bg-white hover:text-black p-2 rounded-full transition-all duration-200' to="/products">Products</Link>
          <Link className='hover:bg-white hover:text-black p-2 rounded-full transition-all duration-200' to="/cart"><ShoppingCart /></Link>
        </div>

      </nav>
  )
}

export default Navbar;
