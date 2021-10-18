import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from '@mui/material/Button';

function App() {
  return (
    <div>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

render(<App />, document.getElementById('root'));
