import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';


afterEach(cleanup);

describe('About component', () => {
  // First Test
  it('renders', () => {
    render(<About />);
  });

  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About />);
  });
  
  });
  describe('links are visible', () => {
    it('inserts text into the links', () => {
      // Arrange
      // Assert
    });
  })
  