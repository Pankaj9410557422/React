import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav className='nav-styles'>
            <h1>Logo</h1>
            <ul className='list'>
                <Link to='/'>
                <li>Home</li>
                </Link>
                <Link to='/About'>
                <li>About</li>
                </Link>
                <Link to='/Movies'>
                <li>Movies</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
