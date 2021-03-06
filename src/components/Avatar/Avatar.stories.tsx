import React from 'react';
import {Story,Meta} from '@storybook/react/types-6-0';
import Avatar, {AvatarProps} from './index';

export default {
  title: 'Componente Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps > = (args) => <Avatar {...args}/>

export const Url = Template.bind({});
Url.args = {
  url: 'https://avatars.githubusercontent.com/u/65139655?s=460&u=5a63f14404df23ed8c72464c08ad22a45f7aa9f4&v=4'
}