import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './containers/NavBar';
import Footer from './containers/Footer';
import HeroHeader from './containers/HeroHeader';
import ProjectShowcase from './containers/ProjectShowcase';
import "./global.css";


function App() {
  return (
    <Router>
          <NavBar></NavBar>
          <HeroHeader></HeroHeader>
          <ProjectShowcase></ProjectShowcase>
          <Footer></Footer>
    </Router>
  );
}

export default App;
