import React from 'react';
import { render } from '@testing-library/react';
import { BasicLandingComponent } from './landing-component.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicLandingComponent />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
