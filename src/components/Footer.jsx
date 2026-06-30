import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-gray-950 text-gray-300 border-t border-gray-800 mt-5">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Branding / Copyright */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} NovaMart. All rights reserved.
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>

          <Link to="/about" className="hover:text-white transition-colors">
            About
          </Link>
        </div>
        
      </div>
    </footer>
    </div>
  )
}

export default Footer
