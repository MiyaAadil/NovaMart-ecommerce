import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from '../components/CartItem'

const Cart = () => {

  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);


  if (cart.length === 0) {
    return (
      <div className="text-center mt-10 text-white">
        <h1 className="text-3xl font-bold">Your Cart is Empty 🛒</h1>
        <p className="text-gray-500 mt-2 mb-5">
          Add some products to your cart.
        </p>
      </div>
    );
  }


  return(
    <div className="w-full mx-auto p-5">
      <h1 className="text-3xl text-white font-bold mb-6">Shopping Cart</h1>

      <div className="flex flex-wrap gap-5 justify-center">
        {cart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
          />
        ))}
      </div>

      <div className="mt-10 text-white border-t pt-5">
          <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>

          <button className="mt-4 bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-950 transition-all cursor-pointer">Proceed to Checkout
          </button>
      </div>
      
    </div>
  )
}

export default Cart
