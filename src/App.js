import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import './App.css';

import Navbar from './component/Navbar';
import Contact from './component/Contact';
import Index from './component/Index';


class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/' component={Index} />
      <Route  path='/contact' component={Contact} />
      </BrowserRouter>
  );
  }
}

export default App;
