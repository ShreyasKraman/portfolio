import React from 'react';

import {render} from '@testing-library/react'
import Portfolio from '../src/container/Portfolio/Portfolio'; 


describe('Porfolio component tests',() => {
  
  test("Displays the correct title", () => {
    const { getByTestId } = render(<Portfolio />)
    expect(getByTestId("portfolio-container")).toBeVisible();
  })
})