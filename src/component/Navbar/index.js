import React from "react";

import { Link } from "react-router-dom";

import {Nav,Logo,Logotext,UIlist,Listitem,Aucher} from './Style'


const Navbar = () => {
  return (
    <Nav>
      <div className="container">
        <Logo>
          <Logotext>Ultra Profile</Logotext>
        </Logo>
        <UIlist>
          <Listitem>
            <Aucher><Link to="/">Home</Link></Aucher>
          </Listitem>
          <Listitem>
            <Aucher>Work</Aucher>
          </Listitem>
          <Listitem>
            <Aucher>Portfolio</Aucher>
          </Listitem>
          <Listitem>
            <Aucher>Resume</Aucher>
          </Listitem>
          <Listitem>
            <Aucher>About</Aucher>
          </Listitem>
          <Listitem>
          <Aucher><Link to="/contact">Contact</Link></Aucher>
          </Listitem>
        </UIlist>
      </div>
    </Nav>
  );
};

export default Navbar;
