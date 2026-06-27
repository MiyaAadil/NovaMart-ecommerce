import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from '../components/CartItem'

const Cart = () => {

  const { cart } = useContext(CartContext);

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
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-3xl text-white font-bold mb-6">Shopping Cart</h1>

      <div className="flex flex-col gap-6">
        {cart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  )
}

export default Cart
