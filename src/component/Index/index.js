import React, { Component } from 'react';

import Home from './../Home';
import About from './../About';
import Footer from './../Footer';
import Portofilo from './../Portofilo';
import Profile from './../Profile';
import Work from './../Work';
import ScocailMedia from '../SocailMedia';

class Index extends Component {
  render(){
  return (
    <div className="Index">

      <Home />
      <Work />
      <Portofilo />
      <Profile />
      <About />
      <ScocailMedia />
      <Footer />
    </div>
  );
  }
}

export default Index;
