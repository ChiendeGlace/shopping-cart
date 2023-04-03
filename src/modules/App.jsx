import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import Homepage from './Homepage';
import Productspage from './Productspage';
import Instrumentpage from './Instrumentpage';
import ShoppingCart from './ShoppingCart';
import ScrollToTop from './ScrollToTop';

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [displayCart, setDisplayCart] = useState(false);
  return (
    <>
      <Header setDisplayCart={setDisplayCart} shoppingCart={shoppingCart} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/products-page"
          element={<Productspage setShoppingCart={setShoppingCart} />}
        />
        <Route
          path="/products-page/:id"
          element={<Instrumentpage setShoppingCart={setShoppingCart} />}
        />
      </Routes>
      {displayCart ? (
        <ShoppingCart
          shoppingCart={shoppingCart}
          displayCart={displayCart}
          setDisplayCart={setDisplayCart}
          setShoppingCart={setShoppingCart}
        />
      ) : null}
    </>
  );
}

export default App;
