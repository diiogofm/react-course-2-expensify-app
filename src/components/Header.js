import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () =>(
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Go Home</NavLink><br></br>
        <NavLink to="/create" activeClassName="is-active">Go to create page</NavLink><br></br>
        <NavLink to="/help" activeClassName="is-active">Go to help page</NavLink>
    </header>
);

export default Header;