import React from 'react';
import Button from '../../components/Button/Button';
import GlobalStyle from '../../theme/GlobalStyle';

function Root() {
  return (
  <div>
    <GlobalStyle/>
    <h1>Hello</h1>
    <Button>Close / Save</Button>
    <Button secondary>Close / Save</Button>
  </div>
  )
}

export default Root;
