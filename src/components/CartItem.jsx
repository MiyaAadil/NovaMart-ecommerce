import React from 'react'

const CartItem = ({product}) => {
  return (
    <div className='text-white'>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  )
}

export default CartItem;
