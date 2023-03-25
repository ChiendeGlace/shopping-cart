import uniqid from 'uniqid';

function ShoppingCart({ shoppingCart }) {
  const total = shoppingCart.reduce((prev, item) => prev + item.price * item.quantity || 1, 0);
  return (
    <div className="shopping-cart">
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
        </div>
      ))}
      {shoppingCart.length > 0 ? (
        <h4>
          Total:
          {' $'}
          {total}
        </h4>
      ) : <h4>There&apos;s nothing in the cart yet</h4>}
    </div>
  );
}

export default ShoppingCart;
