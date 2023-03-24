/* eslint-disable comma-dangle */
import { render, screen, fireEvent } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import ProductCard from '../modules/ProductCard';

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
