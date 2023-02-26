import React from 'react';
import Heading from './Heading';


export default {
  title: 'Heading',
  component: Heading,
};

export const Normal = () => <Heading>FavNotes</Heading>;
export const Big = () => <Heading big>FavNotes</Heading>;

