import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = (props) =>{
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">{props.data ? props.data.title : "Loading.."}</Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link href="#home">{props.data ? props.data.about : "Loading.."}</Nav.Link>
          <Nav.Link href="#features">{props.data ? props.data.product : "Loading.."}</Nav.Link>
          <Nav.Link href="#pricing">{props.data ? props.data.price : "Loading.."}</Nav.Link>
          <Nav.Link href="#promo">{props.data ? props.data.promotion : "Loading.."}</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
