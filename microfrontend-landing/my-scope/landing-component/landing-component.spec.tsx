import React from 'react';
import { render } from '@testing-library/react';
import { BasicLandingComponent } from './landing-component.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicLandingComponent />);
  const rendered = getByText('Landing Page');
  expect(rendered).toBeTruthy();
});
