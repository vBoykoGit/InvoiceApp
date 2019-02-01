import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { withRouter } from "react-router-dom";
import '../css/header.css';

const Header = ({ history }) => {

    const onInvoices = () => history.push('/')
    const onProducts = () => history.push('/products')
    const onCustomers = () => history.push('/customers')

    return (
        <Navbar bg="light" variant="light navLink">
            <Navbar.Brand onClick={onInvoices} >
                <div className="navBrand">Invoice App</div>
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link onClick={onInvoices}>Invoices</Nav.Link>
                <Nav.Link onClick={onProducts}>Products</Nav.Link>
                <Nav.Link onClick={onCustomers} >Customers</Nav.Link>
            </Nav>
        </Navbar>
    )
}
export default withRouter(Header)