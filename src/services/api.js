import axios from "axios";

const getProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products')
    
    return res.data
}

export default getProducts;