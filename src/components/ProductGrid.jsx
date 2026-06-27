import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <section className="px-5 py-10 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Featured Products
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
