import { Link, NavLink } from 'react-router-dom';

function Header({ setDisplayCart, shoppingCart }) {
  const handleClick = () => {
    setDisplayCart((prev) => !prev);
  };
  const totalItems = shoppingCart.reduce((item, current) => item + current.quantity, 0);
  return (
    <header>
      <Link to="/shopping-cart">
        <h1>MUSIC SHOP</h1>
      </Link>
      <div className="nav">
        <NavLink className="nav-link" to="/shopping-cart">
          HOME
        </NavLink>
        <NavLink className="nav-link" to="/shopping-cart/products-page">
          PRODUCTS
        </NavLink>
        <div className="cart-div">
          <button type="button" onClick={handleClick}>
            CART
          </button>
          {shoppingCart.length > 0 ? <div className="cart-div-quantity">{totalItems}</div> : null}
        </div>
      </div>
    </header>
  );
}

export default Header;
