import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import Markets from './components/Markets';

function App() {
  return (
    <div className="app">
      <h1>Crypto Exchanges</h1>

      <Routes>
        <Route path="/" element={<Markets />} />
      </Routes>
    </div>
  );
}

export default App;
