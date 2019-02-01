import React from 'react';
import '../css/header.css';
import { NavLink } from 'react-router-dom'

const selectedStyle = {
    backgroundColor: "white",
    color: "black"
}

const Header = (props) =>
    <header className='header'>
        <nav className='headerContent'>
            <div className='headerPlanner'>Invoice App</div>
            <NavLink exact to='/' className='headerNav' activeStyle={selectedStyle}>Invoices</NavLink>
            <NavLink to='/products' className='headerNav' activeStyle={selectedStyle}>Products</NavLink>
            <NavLink to='/customers' className='headerNav' activeStyle={selectedStyle}>Customers</NavLink>
        </nav>
    </header >


export default Header