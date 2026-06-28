import { Link } from 'react-router-dom'
import { Search, ShoppingCart, Menu, X, ShoppingCartIcon } from 'lucide-react';
import NavLogo from '../assets/images/Novalogo.png'
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0)

  return (
      <>
      <nav className="bg-gray-50/8 text-white px-6 py-1 h-16 sticky top-0 z-50">

        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <img
              src={NavLogo}
              alt="NovaMart Logo"
              className="h-15"
            />
          </Link>

          {/* Search (Desktop) */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-10">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-l-full px-4 py-2 bg-gray-300 text-black outline-none"
            />

            <button className="bg-blue-950 px-4 py-2 rounded-r-full hover:bg-blue-900 cursor-pointer transition">
              <Search />
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">

            <Link
              to="/"
              className="hover:bg-gray-700 py-2 px-2 rounded-full transition-all duration-300"
            >
              Home
            </Link>

            <Link
              to="/products"
              className="hover:bg-gray-700 py-2 px-2 rounded-full transition-all duration-300"
            >
              Products
            </Link>

            <Link
              to="/cart"
              className="relative hover:bg-gray-700 py-2 px-2 rounded-full transition-all duration-300"
            >
              <ShoppingCart size={26} />

              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-xs w-5 h-5 rounded-full flex justify-center items-center">
                  {cartCount}
                </span>
              )}
            </Link>

          </div>

          {/* Mobile Button */}
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
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4">

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

          <Link
            to="/cart"
            className="flex"
            onClick={() => setIsOpen(false)}
          >
            <ShoppingCart /> ({cartCount})
          </Link>

        </div>
      )}
    </>
  )
}

export default Navbar;
