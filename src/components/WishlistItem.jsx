import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import { Trash2 } from 'lucide-react'

const WishlistItem = ({ product }) => {
  const { removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-gray-100/80 rounded-2xl p-4 shadow-md w-full flex flex-col justify-between gap-2">

      <img
        src={product.image}
        alt={product.title}
        className="h-15 w-full object-contain md:h-25"
      />

      <h2 className="font-semibold text-sm md:text-lg line-clamp-2 mt-2 truncate">
        {product.title}
      </h2>

      <p className="font-bold text-blue-950 text-xs md:text-lg mt-2">
        ${product.price}
      </p>

      <div className="flex justify-between mt-1">

        <button
          onClick={() => addToCart(product)}
          className="bg-[#DFFE76] p-2 px-3 text-xs rounded-full hover:bg-[#d0ee6e] transition-all duration-300 active:scale-95 cursor-pointer"
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