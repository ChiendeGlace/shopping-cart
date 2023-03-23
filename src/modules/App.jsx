import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import Productspage from './Productspage';
import Instrumentpage from './Instrumentpage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products-page" element={<Productspage />} />
        <Route path="/products-page/:id" element={<Instrumentpage />} />
      </Routes>
    </>
  );
}

export default App;
