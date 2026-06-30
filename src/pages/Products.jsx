import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductGrid from "../components/ProductGrid";
import FilterBar from "../components/FilterBar";

const Products = () => {

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

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


  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });


  
  return (
    <div className="flex flex-col justify-center items-center">

      <h1 className="text-3xl font-bold text-blue-950 mt-6">All Products</h1>

      <FilterBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <ProductGrid products={filteredProducts} />
    </div>
  );
};

export default Products;
