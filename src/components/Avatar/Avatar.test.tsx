import React from 'react';
import {render,screen} from '@testing-library/react';
import Avatar from './index';

test('renders avatar', ()=>{
  render(<Avatar/>);
  const AvatarElement = screen.getByTestId("img");
  expect(AvatarElement).toHaveProperty("src");
});