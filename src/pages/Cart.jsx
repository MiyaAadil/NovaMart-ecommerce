import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from '../components/CartItem'
import { ShoppingBag, ArrowRight, Tag, Truck, CreditCard, MoveUpRight } from "lucide-react";
import { Link } from 'react-router-dom';

const Cart = () => {

  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);


  if (cart.length === 0) {
    return (
      <div className="text-center flex flex-col items-center mt-10">
        <h1 className="text-3xl font-bold">Your Cart is Empty!</h1>
        <p className="text-gray-600 mt-2 mb-5">
          Add some products to your cart.
        </p>

        <Link to='/products' className='w-fit py-2.5 px-4 bg-[#DFFE76] rounded-full font-medium hover:bg-[#c5e460] cursor-pointer hover:scale-102 transition-all duration-200    shadow-sm hover:shadow-md flex items-center gap-3'>
              <span className='text-sm text-slate-900 font-semibold'>Shop Now</span>
              <div className='bg-black text-white p-2 rounded-full flex items-center justify-center'>
                <MoveUpRight size={14} />
              </div>
        </Link>

      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gray-100 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16">
        
        {/* Header Section */}
        <div className="flex sm:flex-row justify-between items-center sm:items-center gap-2 mb-5 pb-6 border-b lg:-mt-10 -mt-2">
          <div className=''>
            <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight flex items-center gap-3">
              <ShoppingBag className="" size={30} />
              Shopping Cart
            </h1>
          </div>
          <p className="text-md font-medium bg-white p-3 rounded-full">
            {cart.length} {cart.length === 1 ? 'Item' : 'Products'}
          </p>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Cart Items List */}
          <div className="lg:col-span-2 space-y-4 w-full min-w-0">
            {cart.length > 0 ? (
              cart.map(product => (
                <div 
                  key={product.id} 
                  className=""
                >
                  <CartItem product={product} />
                </div>
              ))
            ) : (
              /* Empty Cart State - Enhanced Visual Hierarchy */
              <div className="bg-zinc-900/50 backdrop-blur-md border border-zinc-800/80 rounded-3xl p-10 md:p-16 text-center max-w-xl mx-auto mt-4">
                <div className="w-16 h-16 bg-zinc-800/80 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-zinc-900">
                  <ShoppingBag size={28} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Your cart is empty
                </h2>
                <p className="text-zinc-400 text-sm md:text-base mb-8 max-w-sm mx-auto">
                  Looks like you haven't added anything yet. Explore our catalog to find awesome electronics!
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-red-500 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-red-600 active:scale-98 transition-all shadow-lg shadow-red-500/10 hover:shadow-red-500/20"
                >
                  Continue Shopping
                  <ArrowRight size={18} />
                </Link>
              </div>
            )}
          </div>

          {/* Right Column: Order Summary (Sticky Panel) */}
          {cart.length > 0 && (
            <div className="bg-white text-black rounded-3xl p-5 md:p-8 h-fit lg:sticky lg:top-24 shadow-2xl">
              <h2 className="text-xl md:text-2xl font-bold mb-6 tracking-tight">
                Order Summary
              </h2>

              <div className="space-y-4 text-md">
                {/* Items Count Row */}
                <div className="flex justify-between items-center">
                  <span>Items Quantity</span>
                  <span className="font-mono">{cart.length}</span>
                </div>

                {/* Subtotal Row */}
                <div className="flex justify-between items-center">
                  <span>Subtotal</span>
                  <span className="font-mono">${total.toFixed(2)}</span>
                </div>

                {/* Shipping Benefit Row */}
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1.5">
                    <Truck size={14} className="" />
                    Estimated Shipping
                  </span>
                  <span className="text-emerald-400 font-semibold text-xs tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    FREE
                  </span>
                </div>

                {/* Optional Promo/Discount Tracking Mock */}
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-1.5">
                    <Tag size={14} className="" />
                    Discounts
                  </span>
                  <span className="font-mono">-$0.00</span>
                </div>

                <hr className="border-black my-2" />

                {/* Total Value Row */}
                <div className="flex justify-between items-baseline pt-2">
                  <span className="text-base font-semibold">Total</span>
                  <div className="text-right">
                    <span className="text-2xl md:text-3xl font-black font-mono tracking-tight">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Primary Checkout Call-To-Action Button */}
                <button className="w-full mt-6 bg-red-600 text-white py-4 px-4 rounded-xl font-bold hover:bg-red-500 active:scale-98 transition-all duration-300 shadow-xl shadow-red-500/10 hover:shadow-red-500/20 flex items-center justify-center gap-2 cursor-pointer group">
                  <CreditCard size={18} className="group-hover:animate-pulse" />
                  <span>Proceed to Checkout</span>
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Cart
