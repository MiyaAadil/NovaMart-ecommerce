import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/api'

const ProductDetails = () => {

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
    <div>
      <img src={product.image} alt={product.title} />

      <div className='text-white'>
        <h1>{product.title}</h1>
        <p>${product.price}</p>
        <p>{product.description}</p>

        <button>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDetails
