import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Button from '../../components/atoms/Button/Button';
import MainTemplate from '../../templates/MainTemplate';
import Notes from '../Notes';
import Twitters from '../Twitters';
import Articles from '../Articles';

function Root() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route exact path="/" element={<Notes />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/twitters" element={<Twitters />} />
        </Routes>
        <h1>Hello</h1>
        <Button>Close / Save</Button>
        <Button secondary>Close / Save</Button>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default Root;
