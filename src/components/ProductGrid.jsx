import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <section className="px-5 py-10 text-gray-800">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:mx-5">
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
