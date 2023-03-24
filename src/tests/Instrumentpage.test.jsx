/* eslint-disable comma-dangle */
import { render, screen, fireEvent } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from '../modules/App';

describe('Instrument page', () => {
  it('go back button should direct back to the products page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: 'Visit the shop' });
    fireEvent.click(button);

    const productTitle = screen.getByText(/piano/i);
    fireEvent.click(productTitle);

    const pianoText = screen.getByText(/This is piano/i);
    expect(pianoText).toBeInTheDocument();

    const backButton = screen.getByRole('button', { name: 'Go back' });
    fireEvent.click(backButton);

    const productsPage = screen.getByRole('heading', {
      name: 'Collection || Instruments',
    });
    expect(productsPage).toBeInTheDocument();
  });
});
