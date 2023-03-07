import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './containers/NavBar';
import Footer from './containers/Footer';
import HeroHeader from './containers/HeroHeader';
import ProjectShowcase from './containers/ProjectShowcase';
import "./global.css";
import SkillShowcase from './containers/SkillsShowcase';


function App() {
  return (
    <Router>
          <NavBar></NavBar>
          <HeroHeader></HeroHeader>
          <ProjectShowcase></ProjectShowcase>
          <SkillShowcase></SkillShowcase>
          <Footer></Footer>
    </Router>
  );
}

export default App;
