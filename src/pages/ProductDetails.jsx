import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/api'

import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {

  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error)
      }
    };

    fetchProduct();
  }, [id])

  if (!product) {
    return <h1>Loading...</h1>
  }


  return (
    <div className='text-white flex flex-col items-center justify-center gap-5 m-5 p-5 border rounded-2xl'>
      <img className='h-100' src={product.image} alt={product.title} />

      <div className='flex flex-col items-center gap-3'>
        <h1 className='text-2xl font-bold'>{product.title}</h1>
        <p className='text-xl'>Price: ${product.price}</p>
        <p className='text-sm'>{product.description}</p>

        <button className='w-30 bg-red-500 py-2 rounded-full hover:bg-red-600 active:scale-95 transition-all transform-400 cursor-pointer' onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDetails
