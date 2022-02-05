import React from 'react';
import { Link } from 'react-router-dom';

const Nav =  ({name, updateName}) => {
    let menu;

    async function logout() {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({})
        };

        const response = await fetch(
            'http://localhost:8000/logout', requestOptions
        );

        const content = await response.json();
        console.log("Logout content " )
        console.log (content)
        updateName('')
    }


    if ((name === undefined) || (name === '')) {
        menu = (
            <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                <Link to="/login" className="nav-link active" aria-current="page">Login</Link>
                </li>
                <li className="nav-item">
                <Link to="/register" className="nav-link" >Register</Link>
                </li>
            </ul>
            </div>
        )
    } else {
        menu =(
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                <Link to="/login" className="nav-link active" aria-current="page" onClick={logout}>Logout</Link>
                </li>
            </ul>
        </div>
        )
    }

    return ( 
     <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand" >Home</Link>
            {menu}
            </div>
        </nav>
     );
}

export default Nav;