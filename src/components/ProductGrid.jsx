import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <section className="px-5 py-10">

      <div className="grid grid-cols-2 lg:grid-cols-4 w-ful items-stretch md:grid-cols-3 gap-5 md:mx-5">
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
