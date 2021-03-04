import React from 'react';
import {render,screen} from '@testing-library/react';
import Lista from './index';

test('renders list', ()=>{
  render(<Lista/>);
  const ulElement = screen.getByTestId("list");
  const listElement = screen.getByTestId("item");
  expect(ulElement).toContainElement(listElement);
})