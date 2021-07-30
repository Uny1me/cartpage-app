import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import BrandLogo from '../images/logo_mark.png'

class Nav extends Component {
    render() {
        return (
            <Nav>
                <Navbar.Brand href="#home" className='d-flex p-4'>
                <img src={BrandLogo}
                    width="30"
                    height="30"
                    className="align-top"
                    alt="Company Logo"
                /> <p className='p-3 pt-0 pb-0 text-dark info'>Your Cart Page</p> </Navbar.Brand>
            </Nav>
        );
    }
}

export default Nav;