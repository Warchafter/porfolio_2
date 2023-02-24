import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './containers/NavBar';
import Footer from './containers/Footer';

// const loading = (
//   <div className="pt-3 text-center">
//     <div className='sk-spinner sk-spinner-pulse'></div>
//   </div>
// )

function App() {
  return (
    <Router>
          <NavBar></NavBar>
          <Footer></Footer>
    </Router>
  );
}

export default App;
