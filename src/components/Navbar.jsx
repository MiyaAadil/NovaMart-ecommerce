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
      <nav className="bg-gray-100/90 rounded-full justify-between top-3 mx-5 md:mx-10 h-15 flex sticky z-50 shadow-md">

        <div className="w-full mx-10 flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <img
              src={NavLogo}
              alt="NovaMart Logo"
              className='h-10 w-20 mt-3 object-contain'
            />
          </Link>

          {/* Search (Desktop) */}
          <div className="hidden md:flex items-center rounded-full bg-white flex-1 max-w-sm mx-10">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-5 py-3 text-black outline-none text-sm"
            />

            <button className="bg-black text-white p-2 rounded-full cursor-pointer transition">
              <Search />
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">

            <Link
              to="/"
              className="hover:scale-95 transition-all duration-400"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="hover:scale-96 transition-all duration-400"
            >
              Products
            </Link>

            <Link
              to="/cart"
              className="relative bg-white p-3 rounded-full transition-all duration-300"
            >
              <ShoppingCartIcon size={15} />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            <Link to='/wishlist'
            className="relative bg-white p-3 cursor-pointer rounded-full transition-all">
            <Heart size={15} />

            {wishlist.length > 0 && (
            <span className='absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>{wishlist.length}</span>
          )}
            </Link>

          </div>

          {/* Mobile Button */}
          <div className='flex gap-4'>
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
          <div className='flex gap-1 relative'>
            <p>Wishlist</p><Heart />
              {wishlist.length > 0 && (
                <span className='absolute bg-red-500 right-56 -top-4 rounded-full px-2'>{wishlist.length}</span>
              )}    
          </div>
          </Link>

        </div>
      )}
    </>
  )
}

export default Navbar;
