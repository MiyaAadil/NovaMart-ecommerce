import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {

    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem("wishlist");

        return savedWishlist ? JSON.parse(savedWishlist) : [];
        });

        useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
        }, [wishlist]);



    const addToWishlist = (product) => {
        const exists = wishlist.find((item) => item.id === product.id);

        if (exists) {
            toast("Already in wishlist");
            return;
        }

        setWishlist([...wishlist, product])
        toast.success(`Added to wishlist`)
    };

    const removeFromWishlist = (id) => {
        setWishlist(wishlist.filter((item) => item.id !== id));
        toast.success("Removed from wishlist")
    };

    const isInWishlist = (id) => {
        return wishlist.some((item) => item.id === id)
    };


    return (
        <WishlistContext.Provider value={{wishlist, addToWishlist, removeFromWishlist,isInWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}