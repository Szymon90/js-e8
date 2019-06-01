import React, { useState } from 'react';
/* import TITLE from './constants';
import Pomidor from './Pomidor';
import Numbers from './Numbers';
import Text from './Text'; */
import UseTabs from './UseTabs';
import Interval from './Interval';

function App() {
  const [shouldShowInterval, setShowInterval] = useState(true);

  return (
    <div className="App">
      <UseTabs />
      {shouldShowInterval && <Interval />}
      {shouldShowInterval && (
        <button onClick={() => setShowInterval(false)}>
          Hide interval
        </button>
      )}
    </div>
  );
}

export default App;
