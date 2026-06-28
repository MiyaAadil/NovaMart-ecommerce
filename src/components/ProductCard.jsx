import { Link } from 'react-router-dom'

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem'

const ProductCard = ({ product }) => {

  const { addToCart } = useContext(CartContext);
  
  return (
    <div className='text-white hover:bg-gray-600 bg-gray-800 p-3 rounded-lg hover:scale-95 transition-all duration-600 cursor-pointer flex flex-col items-center justify-between gap-2'>

      <Link to={`/products/${product.id}`}> 
      <div className='flex flex-col items-center'>
          <img src={product.image} alt={product.title} className='h-30 lg:h-40 lg:w-40 w-30 object-contain' />

          <h3 className='text-xs lg:text-md text-center'>{product.title}</h3>

          <p className='text-sm lg:text-md'>${product.price}</p> 
      </div>
      </Link>

      <div className='flex justify-between lg:w-50 gap-2'>
          <button className='bg-blue-900 text-xs lg:text-md lg:py-2 p-2 lg:px-3 rounded-full cursor-pointer hover:bg-blue-950' onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
      
    </div> 
  )
}

export default ProductCard;
