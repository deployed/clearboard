import * as React from 'react';
import { StyleProvider } from 'providers';
import { Button } from '@material-ui/core';

function App() {
  return (
    <StyleProvider>
      <Button onClick={() => alert('Take me on!')}>
        Take on me
        </Button>
    </StyleProvider>
      
  );
}

export default App;
