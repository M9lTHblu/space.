import {render,screen} from '@testing-library/react';
import React from 'react';
import {App} from '../src/components/App';

test('init App', () => {
  render(<App/>)
  expect(screen.getByTestId(/app/)).toBeInTheDocument()
})
