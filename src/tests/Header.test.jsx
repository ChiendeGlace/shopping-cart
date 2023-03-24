/* eslint-disable comma-dangle */
import { render, screen, fireEvent } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from '../modules/App';

describe('Navigation links', () => {
  it('should display the home page when clicking on the Home link', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: 'Home' });
    fireEvent.click(homeLink);

    const homepage = screen.getByText(/become the next Chopin/i);
    expect(homepage).toBeInTheDocument();
  });

  it('should display the home page when clicking on the Music shop header', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const mainHeader = screen.getByRole('heading', { name: 'Music Shop' });
    fireEvent.click(mainHeader);

    const homepage = screen.getByText(/become the next Chopin/i);
    expect(homepage).toBeInTheDocument();
  });

  it('should display the products page when clicking on the Products link', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const productsLink = screen.getByRole('link', { name: 'Products' });
    fireEvent.click(productsLink);

    const productspage = screen.getByRole('heading', {
      name: 'Collection || Instruments',
    });
    expect(productspage).toBeInTheDocument();
  });
  it('should display the cart when clicking on the Cart button', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: 'Cart' });
    fireEvent.click(button);

    const cart = screen.getByText(/Shopping cart/i);
    expect(cart).toBeInTheDocument();
  });
});
