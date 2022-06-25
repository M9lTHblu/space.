import {render, screen} from '@testing-library/react';
import React from 'react';
import '../__moks__/matchMedia';
import '../__moks__/windowResizeTo';
import useMatchMedia from '../src/hooks/useMatchMedia';

describe('hook useMathMedia tests', () => {
  const Test = () => {
    const view = useMatchMedia();
    return <div data-testid='test'>{view}</div>;
  };
  test('should return "mobile" width', () => {
    window.resizeTo(500, 1000);
    render(<Test />);
    expect(screen.getByText(/mobile/));
  });

  test('should return "tablet" width', () => {
    window.resizeTo(800, 1000);
    render(<Test />);
    expect(screen.getByText(/tablet/));
  });

  test('should return "laptop"', () => {
    window.resizeTo(1500, 1000);
    render(<Test />);
    expect(screen.getByText(/laptop/));
  });

  test('should return "desktop"', () => {
    window.resizeTo(2600, 1000);
    render(<Test />);
    expect(screen.getByText(/desktop/));
  });
});
