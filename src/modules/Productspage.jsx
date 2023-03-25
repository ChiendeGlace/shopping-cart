import uniqid from 'uniqid';
import { useState } from 'react';
import ProductCard from './ProductCard';
import Keyboard from './keyboard.jpg';
import Piano from './piano.jpg';
import Guitar from './guitar.jpg';
import Drums from './drums.jpg';
import Cello from './cello.jpg';
import Saxophone from './saxophone.jpg';
import Trumpet from './trumpet.jpg';
import Violin from './violin.jpg';

export const instrumentsList = [
  'guitar',
  'drums',
  'keyboard',
  'piano',
  'saxophone',
  'violin',
  'trumpet',
  'cello',
];
export const instrumentTypes = [
  'Percussion',
  'String',
  'Keyboard',
  'Wind',
];
export const instruments = {
  guitar: {
    name: 'Guitar',
    type: 'String',
    price: 500,
    source: Guitar,
  },
  drums: {
    name: 'Drums',
    type: 'Percussion',
    price: 800,
    source: Drums,
  },
  keyboard: {
    name: 'Keyboard',
    type: 'Keyboard',
    price: 1000,
    source: Keyboard,
  },
  piano: {
    name: 'Piano',
    type: 'Keyboard',
    price: 2000,
    source: Piano,
  },
  violin: {
    name: 'Violin',
    type: 'String',
    price: 1500,
    source: Violin,
  },
  saxophone: {
    name: 'Saxophone',
    type: 'Wind',
    price: 1200,
    source: Saxophone,
  },
  trumpet: {
    name: 'Trumpet',
    type: 'Wind',
    price: 900,
    source: Trumpet,
  },
  cello: {
    name: 'Cello',
    type: 'String',
    price: 1800,
    source: Cello,
  },
};

function Productspage({ setShoppingCart }) {
  const [instrumentActive, setInstrumentActive] = useState(false);
  const handleClick = (item) => {
    setInstrumentActive(item);
  };
  return (
    <section className="products-page">
      <h2>Collection || Instruments</h2>
      <div className="filter">
        <h3>Filter</h3>
        {instrumentActive === false ? (
          instrumentTypes.map((item) => (
            <button
              onClick={() => handleClick(item)}
              type="button"
              key={uniqid()}
            >
              {item}
            </button>
          ))
        ) : (
          <div className="cancel-filter">
            <button type="button">{instrumentActive}</button>
            <button type="button" onClick={() => setInstrumentActive(false)}>
              X
            </button>
          </div>
        )}
      </div>
      <div className="products">
        {instrumentsList.map((item) => (instrumentActive === false
            || instrumentActive === instruments[item].type ? (
              <ProductCard
                key={instruments[item].name}
                name={instruments[item].name}
                price={instruments[item].price}
                source={instruments[item].source}
                setShoppingCart={setShoppingCart}
              />
          ) : null))}
      </div>
    </section>
  );
}

export default Productspage;
