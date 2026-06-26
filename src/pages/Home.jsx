import { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import getProducts from '../services/api'
import ProductGrid from '../components/ProductGrid'

const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {const data = await getProducts();

      setProducts(data.slice(0, 8));
    } catch (error) {
      console.error("Failed to fetch products:", error)
    }
  };

    fetchProducts();
  }, []);


  return (
    <div>
      <Hero />
      <ProductGrid products={products} />
    </div>
  )
}

export default Home
