import React from 'react';
import {Story,Meta} from '@storybook/react/types-6-0';

import Alert, {AlertProps} from './index';

export default {
  title: 'Componente Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args}/>

export const Warning = Template.bind({});
Warning.args = {
  alert: 'Você deve aceitar os termos'
}