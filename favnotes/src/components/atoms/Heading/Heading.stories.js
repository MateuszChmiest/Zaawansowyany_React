import React from 'react';
import { select } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import Heading from './Heading';
import { theme } from '../../../theme/mainTheme';


export default {
  title: 'Heading',
  component: Heading,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const Primary = () => {
  const label = 'Fonts';
  const options = {
    Primary: '1.6rem',
    Secondary: '1.8rem'
  };
  const defaultValue = '1.6rem';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);

  return <Heading size={value}>Hello</Heading>;
};
