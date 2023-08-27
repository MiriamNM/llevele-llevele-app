import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HeaderCustomer from './index';

describe('HeaderCustomer component', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <HeaderCustomer />
      </BrowserRouter>
    );
  });

  it('displays the logo', () => {
    render(
      <BrowserRouter>
        <HeaderCustomer />
      </BrowserRouter>
    );

    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeInTheDocument();
  });

  it('displays the search input and button', () => {
    render(
      <BrowserRouter>
        <HeaderCustomer />
      </BrowserRouter>
    );

    const searchInput = screen.getByRole('searchbox');
    const searchButton = screen.getByRole('button', { name: 'Buscar' });

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('displays the "Cerrar sesión" link', () => {
    render(
      <BrowserRouter>
        <HeaderCustomer />
      </BrowserRouter>
    );

    const cerrarSesionLink = screen.getByText('Cerrar sesión');
    expect(cerrarSesionLink).toBeInTheDocument();
  });
});
