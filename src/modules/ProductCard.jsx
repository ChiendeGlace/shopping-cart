import { Link } from 'react-router-dom';

function ProductCard({
  name, price, source, setShoppingCart,
}) {
  const handleClick = () => {
    setShoppingCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.name === name);
      if (existingIndex !== -1) {
        return prev.map((item, index) => {
          if (index === existingIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      }
      return [
        ...prev,
        {
          name,
          price,
          quantity: 1,
        },
      ];
    });
  };
  return (
    <div className="product-card">
      <Link to={name.toLowerCase()}>
        <img src={source} alt={name} />
      </Link>
      <Link to={name.toLowerCase()}>
        <h3>{name}</h3>
      </Link>
      <p>
        $
        {price}
      </p>
      <button onClick={handleClick} type="button">
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
