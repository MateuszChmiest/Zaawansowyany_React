import React from 'react';
import Card from '../components/molecules/Card/Card';
import UserPageTemplate from '../templates/UserPageTemplate';

const Articles = () => (
  <UserPageTemplate pageType="article">
    <Card cardType="article" />
    <Card cardType="article" />
    <Card cardType="article" />
    <Card cardType="article" />
    <Card cardType="article" />
    <Card cardType="article" />
  </UserPageTemplate>
);

export default Articles;
