import { Link } from 'react-router-dom';
import Pianist from './pianist.jpg';

function Homepage() {
  return (
    <section className="homepage">
      <div className="homepage-body">
        <h2>
          Discover the magic of classical music with our top-quality gear!
          Unlock your inner musician and become the next Chopin.
        </h2>
        <p>
          Whether you&apos;re a beginner or a seasoned pro, our instruments will
          help you sound like a true virtuoso. Don&apos;t just dream of playing
          an instrument &ndash; make it a reality with our expertly crafted
          gear. Start your musical journey today!
        </p>
        <Link to="./products-page">
          <button type="button">Visit the shop</button>
        </Link>
      </div>
      <img src={Pianist} alt="pianist" />
    </section>
  );
}

export default Homepage;
