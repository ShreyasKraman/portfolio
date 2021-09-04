import React from 'react';

import {render} from '@testing-library/react'
import NavigationItems from '../../src/components/Navigation/NavigationItems/NavigationItems'; 


describe('Navigation Items component tests',() => {
  
  test("Displays the component", () => {
    const { getByTestId } = render(<NavigationItems />)
    expect(getByTestId("navigation-items-container")).toBeVisible();
  })
})