import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductGrid from "../components/ProductGrid";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">

      <ProductGrid products={products} />
    </div>
  );
};

export default Products;
