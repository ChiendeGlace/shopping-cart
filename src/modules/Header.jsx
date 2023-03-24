import { Link, NavLink } from 'react-router-dom';

function Header({ setDisplayCart }) {
  const handleClick = () => {
    setDisplayCart((prev) => !prev);
  };
  return (
    <header>
      <Link to="/">
        <h1>Music Shop</h1>
      </Link>
      <div className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products-page">Products</NavLink>
        <button type="button" onClick={handleClick}>
          Cart
        </button>
      </div>
    </header>
  );
}

export default Header;
