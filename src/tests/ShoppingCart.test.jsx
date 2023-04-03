/* eslint-disable comma-dangle */
import { render, screen, fireEvent } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from '../modules/App';

describe('Shopping cart', () => {
  it('adding an item to the cart', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const visitShop = screen.getByRole('button', { name: 'Visit the shop' });
    fireEvent.click(visitShop);

    const piano = screen.getByText(/piano/i);
    fireEvent.click(piano);

    const addToCart = screen.getByText(/Add to cart/i);
    fireEvent.click(addToCart);
    fireEvent.click(addToCart);
    fireEvent.click(addToCart);

    const cart = screen.getByRole('button', { name: 'CART' });
    fireEvent.click(cart);

    const cartProductName = screen.getByText('Name: Piano');
    const cartProductPrice = screen.getByText('Price: $2000');
    const cartProductQuantity = screen.getByText('Quantity: 3');
    expect(cartProductName).toBeInTheDocument();
    expect(cartProductPrice).toBeInTheDocument();
    expect(cartProductQuantity).toBeInTheDocument();
  });
  it('adding multiple items to the cart', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const visitShop = screen.getByRole('button', { name: 'Visit the shop' });
    fireEvent.click(visitShop);

    const piano = screen.getByText(/piano/i);
    fireEvent.click(piano);

    const addToCart = screen.getByText(/Add to cart/i);
    fireEvent.click(addToCart);
    fireEvent.click(addToCart);
    fireEvent.click(addToCart);

    const goBack = screen.getByText(/Go back/i);
    fireEvent.click(goBack);

    const guitar = screen.getByText(/guitar/i);
    fireEvent.click(guitar);

    const addToCart2 = screen.getByText(/Add to cart/i);
    fireEvent.click(addToCart2);
    fireEvent.click(addToCart2);

    const cart = screen.getByRole('button', { name: 'CART' });
    fireEvent.click(cart);

    const cartProductName1 = screen.getByText('Name: Piano');
    const cartProductPrice1 = screen.getByText('Price: $2000');
    const cartProductQuantity1 = screen.getByText('Quantity: 3');
    expect(cartProductName1).toBeInTheDocument();
    expect(cartProductPrice1).toBeInTheDocument();
    expect(cartProductQuantity1).toBeInTheDocument();

    const cartProductName2 = screen.getByText('Name: Guitar');
    const cartProductPrice2 = screen.getByText('Price: $500');
    const cartProductQuantity2 = screen.getByText('Quantity: 2');
    expect(cartProductName2).toBeInTheDocument();
    expect(cartProductPrice2).toBeInTheDocument();
    expect(cartProductQuantity2).toBeInTheDocument();
  });

  it('going back to shop', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const cart = screen.getByRole('button', { name: 'CART' });
    fireEvent.click(cart);

    const close = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(close);

    const products = screen.getByRole('link', { name: 'PRODUCTS' });
    fireEvent.click(products);

    const productsTitle = screen.getByText('Collection || Instruments');
    expect(productsTitle).toBeInTheDocument();
  });

  it('checkout test', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const products = screen.getByRole('link', { name: 'PRODUCTS' });
    fireEvent.click(products);

    const guitar = screen.getByText('Guitar');
    fireEvent.click(guitar);

    const addToCart = screen.getByRole('button', { name: 'Add to cart' });
    fireEvent.click(addToCart);

    const cart = screen.getByRole('button', { name: 'CART' });
    fireEvent.click(cart);

    const checkout = screen.getByRole('button', { name: 'Checkout' });
    fireEvent.click(checkout);

    const homepageTitle = screen.getByText(
      'Discover the magic of classical music with our top-quality gear! Unlock your inner musician and become the next Chopin.'
    );
    expect(homepageTitle).toBeInTheDocument();

    fireEvent.click(cart);

    const cartInfo = screen.getByText("There's nothing in the cart yet");
    expect(cartInfo).toBeInTheDocument();
  });

  it('quantity test', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const products = screen.getByRole('link', { name: 'PRODUCTS' });
    fireEvent.click(products);

    const guitar = screen.getByText('Guitar');
    fireEvent.click(guitar);

    const addToCart = screen.getByRole('button', { name: 'Add to cart' });
    fireEvent.click(addToCart);
    fireEvent.click(addToCart);
    fireEvent.click(addToCart);

    fireEvent.click(products);

    const piano = screen.getByText('Piano');
    fireEvent.click(piano);

    const addToCart2 = screen.getByRole('button', { name: 'Add to cart' });
    fireEvent.click(addToCart2);
    fireEvent.click(addToCart2);
    fireEvent.click(addToCart2);

    const cartQuantity = screen.getByText(6);
    expect(cartQuantity).toBeInTheDocument();
  });

  it('decrease quantity', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const products = screen.getByRole('link', { name: 'PRODUCTS' });
    fireEvent.click(products);

    const guitar = screen.getByText('Guitar');
    fireEvent.click(guitar);

    const addToCart = screen.getByRole('button', { name: 'Add to cart' });
    fireEvent.click(addToCart);
    fireEvent.click(addToCart);
    fireEvent.click(addToCart);
    fireEvent.click(addToCart);

    const cart = screen.getByRole('button', { name: 'CART' });
    fireEvent.click(cart);

    const decrease = screen.getByRole('button', { name: 'Decrease' });
    fireEvent.click(decrease);

    const quantity = screen.getByText('Quantity: 3');
    expect(quantity).toBeInTheDocument();
  });

  it('increase test', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const products = screen.getByRole('link', { name: 'PRODUCTS' });
    fireEvent.click(products);

    const guitar = screen.getByText('Guitar');
    fireEvent.click(guitar);

    const addToCart = screen.getByRole('button', { name: 'Add to cart' });
    fireEvent.click(addToCart);
    fireEvent.click(addToCart);
    fireEvent.click(addToCart);

    const cart = screen.getByRole('button', { name: 'CART' });
    fireEvent.click(cart);

    const increase = screen.getByRole('button', { name: 'Increase' });
    fireEvent.click(increase);

    const quantity = screen.getByText('Quantity: 4');
    expect(quantity).toBeInTheDocument();
  });

  it('remove test', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const products = screen.getByRole('link', { name: 'PRODUCTS' });
    fireEvent.click(products);

    const guitar = screen.getByText('Guitar');
    fireEvent.click(guitar);

    const addToCart = screen.getByRole('button', { name: 'Add to cart' });
    fireEvent.click(addToCart);
    fireEvent.click(addToCart);
    fireEvent.click(addToCart);

    const cart = screen.getByRole('button', { name: 'CART' });
    fireEvent.click(cart);

    const remove = screen.getByRole('button', { name: 'Remove' });
    fireEvent.click(remove);

    const message = screen.getByText("There's nothing in the cart yet");
    expect(message).toBeInTheDocument();
  });
});
