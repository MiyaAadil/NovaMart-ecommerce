import { useContext} from 'react'
import { CartContext } from '../context/CartContext';

const CartItem = ({product}) => {

  const { increaseQuantity, decreaseQuantity, removeFromCart  } = useContext(CartContext);

  return (
      <div className='text-white border w-70 p-4 flex flex-col items-center rounded-2xl cursor-pointer hover:bg-gray-50/5 transition-all transform-600'>

        <img className='h-30 object-contain' src={product.image} alt={product.title} />

        <h2 className='font-bold'>{product.title}</h2>

        <p className='text-xs'>${product.price}</p>
     

        <div className='flex gap-3 items-center mt-4'>
          

          <button className='bg-slate-600 py-2 px-3 rounded-full cursor-pointer hover:bg-slate-700 transition-all transform-400' onClick={() => decreaseQuantity(product.id)}>-</button>
          
          <p>{product.quantity}</p>

          <button className='bg-slate-600 py-2 px-3 rounded-full cursor-pointer hover:bg-slate-700 transition-all transform-400' onClick={() => increaseQuantity(product.id)}>+</button>

      </div>

      <button className='bg-red-500 p-1 mt-3 w-20 text-sm rounded-full hover:bg-red-600 cursor-pointer transition-all transform-600 active:scale-95' 
      onClick={() => removeFromCart(product.id)}>Remove</button>
      </div>
  )
}

export default CartItem;
