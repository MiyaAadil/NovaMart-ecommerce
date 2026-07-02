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
  <div className="max-w-7xl mx-auto px-5 py-10">

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-3xl shadow-xl p-8">

      {/* Product Image */}

      <div className="bg-gray-200 rounded-2xl p-10 flex justify-center items-center">

        <img
          loading="lazy"
          src={product.image}
          alt={product.title}
          className="h-80 md:h-96 object-contain transition-transform duration-300 hover:scale-105"
        />

      </div>

      {/* Product Information */}

      <div className="flex flex-col justify-center gap-5">

        <span className="bg-red-500 text-sm text-white px-4 py-1 rounded-full w-fit capitalize">
          {product.category}
        </span>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          {product.title}
        </h1>

        <div className="flex items-center gap-2">

          <span className="text-yellow-400 text-xl">
            ⭐⭐⭐⭐☆
          </span>

          <span className="text-gray-400">
            ({product.rating.rate})
          </span>

        </div>

        <h2 className="text-4xl font-bold text-red-500">
          ${product.price}
        </h2>

        <p className="leading-6">
          {product.description}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-red-500 hover:bg-red-600 active:scale-95 transition-all text-white duration-200 text-lg py-4 rounded-xl font-semibold cursor-pointer"
        >
          Add to Cart
        </button>

      </div>

    </div>

  </div>
)
}

export default ProductDetails
