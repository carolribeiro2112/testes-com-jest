import React from 'react';
import {Story,Meta} from '@storybook/react/types-6-0';
import Lista, {ListaProps} from './index';

export default {
  title: 'Componente Lista',
  component: Lista,
} as Meta;

const Template: Story<ListaProps> = (args) => <Lista {...args}/>

export const Profession = Template.bind({});
Profession.args = {
  profession: 'Dev Front-end'
}