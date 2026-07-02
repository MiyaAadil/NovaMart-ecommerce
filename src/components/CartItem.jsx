import { useContext} from 'react'
import { CartContext } from '../context/CartContext';
import { Trash2 } from 'lucide-react';

const CartItem = ({product}) => {

  const { increaseQuantity, decreaseQuantity, removeFromCart  } = useContext(CartContext);

  return (
      <div className='border border-gray-500 w-full p-4 flex flex-col rounded-2xl'>

        <div className='flex items-center gap-4'>
          <img className='w-20 h-20 p-2 bg-gray-200 rounded-xl object-contain' src={product.image} alt={product.title} />

          <h2 className='font-bold w-full truncate'>{product.title}</h2>
        </div>

        <div className='flex justify-between items-center'>
              <p className='text-lg font-semibold'>Price: ${product.price}</p>
        

              <div className='flex gap-2 items-center p-1.5 rounded-2xl bg-gray-200'>
              
                  <button className='bg-gray-300 w-5 rounded-4xl cursor-pointer hover:bg-gray-400 transition-all transform-400' onClick={() => decreaseQuantity(product.id)}>-</button>
                  
                  <p>{product.quantity}</p>

                  <button className='bg-gray-300 w-5 rounded-4xl cursor-pointer hover:bg-gray-400 transition-all transform-400' onClick={() => increaseQuantity(product.id)}>+</button>

              </div>

              <button className='cursor-pointer text-red-600 active:scale-95' 
              onClick={() => removeFromCart(product.id)}><Trash2 /></button>
        </div>
      </div>
  )
}

export default CartItem;
