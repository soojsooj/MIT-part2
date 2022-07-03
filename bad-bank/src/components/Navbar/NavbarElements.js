import React from 'react'
import {BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import { Nav, Navbar, Container } from 'react-bootstrap'


const NavbarElements = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">BadBank</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/deposit">Deposit</Nav.Link>
          <Nav.Link href="/withdraw">Withdraw</Nav.Link>
          <Nav.Link href="/balance">Balance</Nav.Link>
          <Nav.Link href="/alldata">AllData</Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link href="/createaccount">Create Account</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarElements
