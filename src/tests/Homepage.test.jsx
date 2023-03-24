/* eslint-disable comma-dangle */
import { render, screen, fireEvent } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from '../modules/App';

describe('Navigation links', () => {
  it('should display the products page when clicking on the Visit the shop button', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: 'Visit the shop' });
    fireEvent.click(button);

    const productspage = screen.getByRole('heading', {
      name: 'Collection || Instruments',
    });
    expect(productspage).toBeInTheDocument();
  });
});
