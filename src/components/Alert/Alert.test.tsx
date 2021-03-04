import React from 'react';
import {render,screen} from '@testing-library/react';
import Alert from './index';

test('renders alert', ()=>{
  render(<Alert/>);
  const alertElement = screen.getByText(/Você deve aceitar os termos/);
  expect(alertElement).toBeInTheDocument();
})