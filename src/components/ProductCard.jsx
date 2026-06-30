import { Link } from 'react-router-dom'
import { Heart } from "lucide-react";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from "../context/WishlistContext";
import CartItem from '../components/CartItem'

const ProductCard = ({ product }) => {

  const { addToCart } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);
  
  return (
    <div className='text-white hover:bg-gray-700 bg-gray-800 py-2 rounded-2xl hover:scale-102 transition-all duration-600 cursor-pointer flex flex-col items-center justify-between gap-2'>


          <div className="relative">

            <button
              className="absolute top-0 -right-21 md:-right-40 bg-white rounded-full p-2 shadow cursor-pointer"
              onClick={() =>
                isInWishlist(product.id)
                  ? removeFromWishlist(product.id)
                  : addToWishlist(product)
              }
            >
              <Heart
                className={
                  isInWishlist(product.id)
                    ? "fill-red-500 text-red-500"
                    : "text-gray-500"
                }
              />
            </button>

          </div>

      <Link to={`/products/${product.id}`}> 
      <div className='flex flex-col items-center'>
          <img src={product.image} loading="lazy" alt={product.title} className='h-30 lg:h-40 lg:w-40 w-30 object-contain' />

          <h3 className='text-xs lg:text-md text-center'>{product.title}</h3>

          <p className='text-sm lg:text-md'>${product.price}</p> 
      </div>
      </Link>

      <div className='flex justify-center lg:w-50 gap-2'>
          <button className='bg-blue-900 text-xs lg:text-md lg:py-2 p-2 lg:px-3 rounded-full cursor-pointer hover:bg-blue-950' onClick={() => addToCart(product)}>Add to Cart</button>
      </div>

    </div> 
  )
}

export default ProductCard;
