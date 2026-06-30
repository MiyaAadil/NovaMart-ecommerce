import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import { Trash2 } from 'lucide-react'

const WishlistItem = ({ product }) => {
  const { removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-gray-100/80 rounded-2xl p-4 shadow h-55 md:h-auto md:w-80 flex flex-col justify-between">

      <img
        src={product.image}
        alt={product.title}
        className="h-15 w-full object-contain md:h-25"
      />

      <h2 className="font-semibold text-sm md:text-lg line-clamp-2 mt-2">
        {product.title}
      </h2>

      <p className="font-bold text-blue-900 text-xs md:text-lg mt-2">
        ${product.price}
      </p>

      <div className="flex justify-between mt-1">

        <button
          onClick={() => addToCart(product)}
          className="bg-blue-900 text-white p-2 text-xs rounded-full hover:bg-blue-950 cursor-pointer"
        >
          Add to Cart
        </button>

        <button
          onClick={() => removeFromWishlist(product.id)}
          className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 cursor-pointer"
        >
          <Trash2 />
        </button>

      </div>

    </div>
  );
};

export default WishlistItem;