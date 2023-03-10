import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
};

export const Primary = () => {
  const label = 'Colors';
  const options = {
    Primary: 'hsl(49, 100%, 58%)',
    Secondary: 'hsl(196, 83%, 75%)',
    Tertiary: 'hsl(106, 47%, 64%)',
  };
  const defaultValue = 'hsl(49, 100%, 58%)';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);

  return <Button color={value}>Hello</Button>;
};
export const Secondary = () => <Button secondary>Hello</Button>;
