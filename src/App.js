import React from 'react';
import './src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavMenu';
import About from './components/About';
import Resume from './components/Resume'

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