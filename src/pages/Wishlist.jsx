import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import WishlistItem from "../components/WishlistItem";

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);

  if (wishlist.length === 0) {
    return (
      <div className="text-center mt-8 mb-5">
        <h1 className="text-3xl font-bold">Your Wishlist is Empty</h1>
        <p className="text-gray-600">Add your favourites on your wishlist</p>
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-10 w-full mt-4 lg:mt-0">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
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