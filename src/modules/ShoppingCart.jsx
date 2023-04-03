import uniqid from 'uniqid';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function ShoppingCart({ shoppingCart, setDisplayCart, setShoppingCart }) {
  const total = shoppingCart.reduce(
    (prev, item) => prev + item.price * item.quantity || 1,
    0,
  );
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains('shopping-cart')) {
        setDisplayCart(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClick = () => {
    setDisplayCart(false);
  };
  const handleCheckout = () => {
    setShoppingCart([]);
  };
  const increaseQuantity = (name) => {
    setShoppingCart((prev) => {
      const cart = prev.map((item) => {
        if (item.name === name) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return cart;
    });
  };
  const decreaseQuantity = (name) => {
    setShoppingCart((prev) => {
      const cart = prev
        .map((item) => {
          if (item.name === name) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);
      return cart;
    });
  };
  const remove = (name) => {
    setShoppingCart((prev) => {
      const cart = prev.filter((item) => item.name !== name);
      return cart;
    });
  };
  return (
    <div className="shopping-cart">
      <div className="shopping-cart-body">
        <h2>Here is the shopping cart</h2>

        {shoppingCart.map((item) => (
          <div key={uniqid()} className="cart-item">
            <p>
              Name:
              {' '}
              {item.name}
            </p>

            <p>
              Price:
              {' $'}
              {item.price}
            </p>

            <p>
              Quantity:
              {' '}
              {item.quantity}
            </p>
            <div className="button-div">
              <button type="button" onClick={() => increaseQuantity(item.name)}>
                Increase
              </button>
              <button type="button" onClick={() => decreaseQuantity(item.name)}>
                Decrease
              </button>
            </div>
            <button type="button" onClick={() => remove(item.name)}>
              Remove
            </button>
          </div>
        ))}

        {shoppingCart.length > 0 ? (
          <h4>
            Total:
            {' $'}
            {total}
          </h4>
        ) : (
          <h4>There&apos;s nothing in the cart yet</h4>
        )}
        {total > 0 ? (
          <Link to="/" className="shopping-cart-button">
            <button
              type="button"
              onClick={() => {
                handleCheckout();
                handleClick();
              }}
            >
              Checkout
            </button>
          </Link>
        ) : null}
        <button type="button" onClick={handleClick}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
