import React from 'react';
import { render } from '@testing-library/react';
import { BasicProductsComponents } from './products-components.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicProductsComponents />);
  const rendered = getByText('Página de Productos');
  expect(rendered).toBeTruthy();
});
