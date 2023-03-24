import { Link } from 'react-router-dom';
import React from './react.svg';

function ProductCard({ name, price, source = React }) {
  return (
    <div className="product-card">
      <Link to={name.toLowerCase()}>
        <img src={source} alt={name} />
      </Link>
      <Link to={name.toLowerCase()}>
        <h3>{name}</h3>
      </Link>
      <p>{price}</p>
      <button type="button">Add to cart</button>
    </div>
  );
}

export default ProductCard;
