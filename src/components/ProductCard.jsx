import { Link } from 'react-router-dom'

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem'

const ProductCard = ({ product }) => {

  const { addToCart } = useContext(CartContext);
  
  return (
    <div className='text-white hover:bg-gray-600 bg-gray-800 p-3 rounded-lg hover:scale-95 transition-all duration-600 cursor-pointer flex flex-col items-center gap-3'>
      <img src={product.image} alt={product.title} className='h-40 w-40 object-contain' />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <div className='flex justify-between w-50'>
          <button className='bg-blue-900 py-2 px-3 rounded-full cursor-pointer hover:bg-blue-950' onClick={() => addToCart(product)}>Add to Cart</button>
          <Link to={`/products/${product.id}`} className='bg-red-400 py-2 px-3 rounded-full cursor-pointer hover:bg-red-500'>
          View</Link>
      </div>
    </div>
    
  )
}

export default ProductCard;
