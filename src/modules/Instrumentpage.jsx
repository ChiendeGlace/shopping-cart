import { useParams, Link } from 'react-router-dom';
import { instruments } from './Productspage';

function Instrumentpage({ setShoppingCart }) {
  const params = useParams();
  const text = `This is ${instruments[params.id].name}`;
  const handleClick = () => {
    setShoppingCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.name === instruments[params.id].name,
      );
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
          name: instruments[params.id].name,
          price: instruments[params.id].price,
          quantity: 1,
        },
      ];
    });
  };
  return (
    <div className="instrument-page">
      <img
        src={instruments[params.id].source}
        alt={instruments[params.id].name}
      />
      <div className="text-div">
        <h2>{text}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          illo illum dolorum suscipit deserunt assumenda quo nesciunt incidunt
          beatae, similique dicta. Officiis tenetur sed provident? Debitis
          reprehenderit commodi natus ipsum?
        </p>
        <p>
          $
          {instruments[params.id].price}
        </p>
        <div className="button-div">
          <button onClick={handleClick} type="button">
            Add to cart
          </button>
          <Link to="../products-page">
            <button type="button">Go back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Instrumentpage;
