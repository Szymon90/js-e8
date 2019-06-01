import React from 'react';
import TITLE from './constants';
import Pomidor from './Pomidor';
import Numbers from './Numbers';

function App() {
  return (
    <div className="App">
      <h2>{TITLE.toUpperCase()}</h2>
      <Pomidor color="red" rodzaj="malinowy" />
      <Pomidor color="green" rodzaj="malinowy" />

      <Numbers />
    </div>
  );
}

export default App;
