import ProductCard from './ProductCard';
import piano from './piano.jpg';

function Productspage() {
  return (
    <section className="products-page">
      <h2>Collection || Instruments</h2>
      <div className="filter">
        <p>filter</p>
      </div>
      <div className="products">
        <ProductCard name="Piano" price="$1000" source={piano} />
        <ProductCard name="Guitar" price="$200" />
        <ProductCard name="Violin" price="$500" />
      </div>
    </section>
  );
}

export default Productspage;
