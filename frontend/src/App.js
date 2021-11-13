import React, {useState, useContext} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Badge } from 'react-bootstrap';
import Main from "./components/Main";
import {ProductContext} from './ProductContext';
import {ProductProvider} from './ProductContext';

function App() {
  
  return (
   
      <ProductProvider>
        <Navbar bg="primary" variant="dark" className ="nav-grid">
            <Container >
            <Nav className="me-auto">
            <Nav.Link href="Admin" style={{color:'white'}}>Admin</Nav.Link>
            <Nav.Link href="Store" style={{color:'white'}}>Store</Nav.Link>
            <Nav.Link href="Cart" style={{color:'white'}}>Cart</Nav.Link>
            </Nav>
            <Nav className="mr-auto">            
                    <Badge className="mt-2" variant="black">Products In stock </Badge>
                </Nav>
            </Container>
        </Navbar>
  
        <Main />
      </ProductProvider>
    
  );
}

export default App;