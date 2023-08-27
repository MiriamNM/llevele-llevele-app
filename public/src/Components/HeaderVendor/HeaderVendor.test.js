import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HeaderVendor from './index';

describe('HeaderVendor component', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <HeaderVendor />
      </BrowserRouter>
    );
  });

  it('displays the logo', () => {
    render(
      <BrowserRouter>
        <HeaderVendor />
      </BrowserRouter>
    );

    const logoElement = screen.getByAltText('logo');
    expect(logoElement).toBeInTheDocument();
  });

  it('displays the search input and button', () => {
    render(
      <BrowserRouter>
        <HeaderVendor />
      </BrowserRouter>
    );

    const searchInput = screen.getByRole('searchbox');
    const searchButton = screen.getByRole('button', { name: 'Buscar' });

    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('displays the "Nuevo Producto" button', () => {
    render(
      <BrowserRouter>
        <HeaderVendor />
      </BrowserRouter>
    );

    const nuevoProductoButton = screen.getByText('Nuevo Producto');
    expect(nuevoProductoButton).toBeInTheDocument();
  });

  it('displays the "Productos" button', () => {
    render(
      <BrowserRouter>
        <HeaderVendor />
      </BrowserRouter>
    );

    const productosButton = screen.getByText('Productos');
    expect(productosButton).toBeInTheDocument();
  });

  it('opens the NewProduct modal', () => {
    render(
      <BrowserRouter>
        <HeaderVendor />
      </BrowserRouter>
    );

    const nuevoProductoButton = screen.getByText('Nuevo Producto');
    fireEvent.click(nuevoProductoButton);

    const newProductModal = screen.getByText('Nuevo Producto');
    expect(newProductModal).toBeInTheDocument();
  });
});
