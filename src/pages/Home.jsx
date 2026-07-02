import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import { getProducts } from '../services/api'
import ProductGrid from '../components/ProductGrid'
import SkeletonCard from '../components/SkeletonCard'

const Home = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {const data = await getProducts();

      setProducts(data.slice(0, 8));
    } catch (error) {
      console.error("Failed to fetch products:", error)
    } finally {
      setLoading(false)
    }
  };

    fetchProducts();
  }, []);


  return (
    <div className=''>
      <Hero />
      <h1 className='text-3xl font-bold p-10 lg:mx-auto -mb-15 -mt-10'>Featured Products</h1>
      {
        loading ? (
          <div>
            {[...Array(8)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <ProductGrid products={products} />
        )
      }
    </div>
  )
}

export default Home
