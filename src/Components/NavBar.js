import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu, Grid } from 'semantic-ui-react'

const NavBar = (props) => {
  return (
    <Container>
      <Menu className="navbar">

        <NavLink className="navLink" to="/">Home </NavLink>
        <NavLink className="navLink" to="/todo">Todo </NavLink>
        <NavLink className="navLink" to="/login">Login </NavLink>
        <NavLink className="navLink" to="/register">Register</NavLink> 
      
      </Menu>
    </Container>
  );
};

export default NavBar;