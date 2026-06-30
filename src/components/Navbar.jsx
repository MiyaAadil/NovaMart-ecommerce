import { Link } from 'react-router-dom'
import { Search, ShoppingCart, Menu, X, ShoppingCartIcon, Heart } from 'lucide-react';
import NavLogo from '../assets/images/Novalogo.png'
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { WishlistContext} from '../context/WishlistContext';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const { cart } = useContext(CartContext);

  const { wishlist } = useContext(WishlistContext);

  const cartCount = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0)

  return (
      <>
      <nav className="bg-gray-100/90 rounded-full top-3 mx-5 px-5 md:mx-10 lg:px-10 h-15 flex items-center justify-between sticky z-50 shadow-md">

          {/* Logo */}
          <div className='flex gap-5'>
                <Link to="/" className='flex gap-1 items-center bg-slate-200/50 rounded-full p-2 md:w-35'>

                <img
                  src={NavLogo}
                  alt="NovaMart Logo"
                  className='h-5 w-5 object-contain'
                />
                <p className='font-semibold'>NOVA MART.</p>
              </Link>

              {/* Search (Desktop) */}
              <div className="hidden md:flex items-center rounded-full bg-white max-w-sm lg:w-100">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-5 py-3 text-black outline-none text-sm"
                />

                <button className="bg-black text-white p-2 m-1 rounded-full cursor-pointer transition">
                  <Search />
                </button>
              </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center md:gap-5 lg:gap-15">

            <Link
              to="/"
              className="hover:scale-105 transition-all duration-400"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="hover:scale-105 transition-all duration-400"
            >
              Products
            </Link>

            <Link
              to="/cart"
              className="relative bg-white p-4 rounded-full hover:scale-105 transition-all duration-300"
            >
              <ShoppingCartIcon size={17} />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            <Link to='/wishlist'
            className="relative bg-white p-4 cursor-pointer rounded-full hover:scale-105 transition-all">
            <Heart size={17} />

            {wishlist.length > 0 && (
            <span className='absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>{wishlist.length}</span>
          )}
            </Link>

          </div>

          {/* Mobile Button */}
          <div className='flex gap-4 lg:hidden md:hidden'>
              <Link
                  to="/cart"
                  className="relative bg-white p-3 rounded-full transition-all duration-300 md:hidden"
                >
                  <ShoppingCart size={15} />

                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600  text-white text-xs w-5 h-5 rounded-full flex justify-center items-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
                
                <button
                className="md:hidden cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
          </div>

  </nav>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="md:hidden bg-black/95 text-white px-8 py-20 space-y-4 fixed inset-0 z-50 flex flex-col gap-7 backdrop-blur-sm animate-fade-in">

          <button 
            className="absolute top-5 right-17 text-white cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <X size={40} />
          </button>

          <div className="flex ">

            <input
              type="text"
              placeholder="Search..."
              className="flex-1 rounded-l-full px-4 py-2 bg-white text-black outline-none"
            />

            <button className="bg-blue-900 px-4 rounded-r-full cursor-pointer">
              <Search />
            </button>

          </div>

          <Link
            to="/"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/products"
            className="block"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>

          <Link to='/wishlist' onClick={() => setIsOpen(false)}>
          <div className='flex gap-1 relative w-27'>
            <p>Wishlist</p><Heart />
              {wishlist.length > 0 && (
                <span className='bg-red-500 ml-1 rounded-full px-1.75 absolute -top-3 right-2'>{wishlist.length}</span>
              )}    
          </div>
          </Link>

        </div>
      )}
    </>
  )
}

export default Navbar;
