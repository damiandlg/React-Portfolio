import React from 'react';
import NavBar from './components/NavMenu';
import About from './components/About';
import Resume from './components/Contact';

import './app.css';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <main>
        <About></About>
        <Resume></Resume>
      </main>
    </div>
  );
}

export default App;