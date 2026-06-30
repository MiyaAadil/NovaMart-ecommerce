import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import WishlistItem from "../components/WishlistItem";

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  if (wishlist.length === 0) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">Your Wishlist is Empty ❤️</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-25">
        {wishlist.map((product) => (
          <WishlistItem
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;