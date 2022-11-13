import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';


export default function App () {
  return (
    <>
    <Router>
    <NavMenu />
      <Home></Home>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </Router>
    </>
  );
}
