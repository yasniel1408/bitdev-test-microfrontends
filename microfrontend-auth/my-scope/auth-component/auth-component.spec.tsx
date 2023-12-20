import React from 'react';
import { render } from '@testing-library/react';
import { BasicAuthComponent } from './auth-component.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicAuthComponent />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
