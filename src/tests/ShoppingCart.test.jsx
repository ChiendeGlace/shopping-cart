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

    const cart = screen.getByRole('button', { name: 'Cart' });
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

    const cart = screen.getByRole('button', { name: 'Cart' });
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
});
