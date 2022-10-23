import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Container, Navbar, Nav } from "react-bootstrap";
import { logout } from "../login/LoginActions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state=>state.auth.user);
  const onLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            User: <b>{user.username}</b>
          </Navbar.Text>
          <Nav.Link onClick={onLogout}>Logout</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <h1>Dashboard</h1>
      </Container>
    </div>
  );
};

export default Dashboard;