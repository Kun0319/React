import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>   &nbsp;|&nbsp;
            <NavLink to="/about/:who">About</NavLink>  &nbsp;|&nbsp;
            <NavLink to="/contact">Contact</NavLink> &nbsp;|&nbsp;
            <NavLink to="/member/:id">Member</NavLink> &nbsp;|&nbsp;
            <a href='http://localhost:3000/contact'>Contact(LAB)</a>
        </div>
    );
}

export default Navigation;