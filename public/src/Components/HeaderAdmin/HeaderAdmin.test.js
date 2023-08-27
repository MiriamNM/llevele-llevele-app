import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HeaderAdmin from './index';

describe('HeaderAdmin component', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <HeaderAdmin />
      </BrowserRouter>
    );
  });

  it('displays the logo', () => {
    render(
      <BrowserRouter>
        <HeaderAdmin />
      </BrowserRouter>
    );

    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeInTheDocument();
  });

  it('displays the search input and button', () => {
    render(
      <BrowserRouter>
        <HeaderAdmin />
      </BrowserRouter>
    );

    const searchInput = screen.getByRole('searchbox');
    const searchButton = screen.getByRole('button', { name: 'Buscar' });

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('displays the Cascader component', () => {
    render(
      <BrowserRouter>
        <HeaderAdmin />
      </BrowserRouter>
    );

    const cascaderComponent = screen.getByRole('combobox');
    expect(cascaderComponent).toBeInTheDocument();
  });

  it('displays the "Cerrar sesión" link', () => {
    render(
      <BrowserRouter>
        <HeaderAdmin />
      </BrowserRouter>
    );

    const cerrarSesionLink = screen.getByText('Cerrar sesión');
    expect(cerrarSesionLink).toBeInTheDocument();
  });
});
