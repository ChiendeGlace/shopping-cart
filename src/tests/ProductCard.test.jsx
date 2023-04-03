/* eslint-disable comma-dangle */
import { render, screen, fireEvent } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import ProductCard from '../modules/ProductCard';
import App from '../modules/App';

describe('ProductCard component', () => {
  it('renders the product name, price and image', () => {
    render(
      <BrowserRouter>
        <ProductCard name="Test product" price="$350" />
      </BrowserRouter>
    );
    const productName = screen.getByText(/test product/i);

    expect(productName).toBeInTheDocument();

    const productPrice = screen.getByText(/\$\d+(\.\d+)?/);

    expect(productPrice).toBeInTheDocument();

    const productImage = screen.getByAltText(/test product/i);

    expect(productImage).toBeInTheDocument();
  });

  it('clicking on the title directs to the instrument page', () => {
    render(
      <BrowserRouter>
        <ProductCard name="Piano" price="$350" />
      </BrowserRouter>
    );

    const productTitle = screen.getByText(/piano/i);
    fireEvent.click(productTitle);

    expect(window.location.pathname).toBe('/piano');
  });

  it('clicking on the image directs to the instrument page', () => {
    render(
      <BrowserRouter>
        <ProductCard name="Piano" price="$350" />
      </BrowserRouter>
    );

    const productImage = screen.getByAltText(/piano/i);
    fireEvent.click(productImage);

    expect(window.location.pathname).toBe('/piano');
  });
});

describe('Filter test', () => {
  it('renders the product name, price and image', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const visitShop = screen.getByRole('button', { name: 'Visit the shop' });
    fireEvent.click(visitShop);

    const stringFilter = screen.getByRole('button', { name: 'String' });
    fireEvent.click(stringFilter);

    const stringInstruments = screen.getAllByRole('img');
    expect(stringInstruments).toHaveLength(3);

    const removeFilter = screen.getByRole('button', { name: 'x' });
    fireEvent.click(removeFilter);

    const keyboardFilter = screen.getByRole('button', { name: 'Keyboard' });
    fireEvent.click(keyboardFilter);

    const keyboardInstruments = screen.getAllByRole('img');
    expect(keyboardInstruments).toHaveLength(2);
  });
});
