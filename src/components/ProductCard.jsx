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
    <div className='bg-[#F8F9F4] p-4 rounded-3xl  flex flex-col items-center justify-between gap-3 h-full w-full min-w-0 relative hover:shadow-lg transition-all duration-400 overflow-hidden group'>

            <button
              className="absolute z-20 top-2 right-2 lg:top-0 lg:right-0 lg:m-2 bg-white rounded-full p-2 shadow cursor-pointer transition-transform active:scale-95"
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

      <Link to={`/products/${product.id}`} className='block w-full min-w-0 flex-1 group-hover:no-underline'> 
      <div className='flex justify-center flex-col items-center gap-3 w-full min-w-0'>
          <img src={product.image} loading="lazy" alt={product.title} className='h-30 lg:h-40 lg:w-40 w-30 object-contain hover:scale-102 transition-all duration-500 cursor-pointer' />

          <h3 className='text-xs font-bold lg:text-lg w-full text-center truncate'>{product.title}</h3>
          <p className='text-xs text-gray-500 lg:text-xs text-center w-full truncate'>{product.description}</p>
      </div>
        
      </Link>

      <div className='flex justify-between items-center w-full mt-2 gap-2'>

          <p className='text-sm lg:text-base font-bold text-gray-900'>${product.price}</p>

          <button className='bg-[#DFFE76] hover:bg-[#c5e460] transition-all duration-300 shadow-sm text-xs font-semibold lg:text-md py-2 px-3 lg:px-4 rounded-full cursor-pointer whitespace-nowrap active:scale-95' onClick={() => addToCart(product)}>Add to Cart</button>
      </div>

    </div> 
  )
}

export default ProductCard;
