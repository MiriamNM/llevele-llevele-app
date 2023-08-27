import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';

describe('Header component', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });

  it('displays register and login buttons', () => {
    render(<Header />);
    
    const registerButton = screen.getByText('Registrate');
    expect(registerButton).toBeInTheDocument();
    
    const loginButton = screen.getByText('Inicia sesión');
    expect(loginButton).toBeInTheDocument();
  });
});
