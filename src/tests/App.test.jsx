/* eslint-disable comma-dangle */
import { it, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../modules/App';

describe('Rendering App component', () => {
  it('Renders header', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });
  it('Renders homepage by default', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const homepage = screen.getByText(/become the next Chopin/i);
    expect(homepage).toBeInTheDocument();
  });
});
