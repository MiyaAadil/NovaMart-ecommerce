import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  
  return (
    <div>
      <img src={product.image} alt={product.title} className='' />

      <h3>{product.title}</h3>

      <p>${product.price}</p>

      <div>
          <button>Add to Cart</button>
          <Link to={`/products/${product.id}`} className=''>
          View</Link>
      </div>

    </div>
  )
}

export default ProductCard;
