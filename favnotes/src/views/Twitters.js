import React from 'react';
import Card from '../components/molecules/Card/Card';
import UserPageTemplate from '../templates/UserPageTemplate';

const Twitters = () => (
  <UserPageTemplate pageType="twitter">
    <Card cardType="twitter" />
    <Card cardType="twitter" />
    <Card cardType="twitter" />
    <Card cardType="twitter" />
    <Card cardType="twitter" />
    <Card cardType="twitter" />
  </UserPageTemplate>
);

export default Twitters;
