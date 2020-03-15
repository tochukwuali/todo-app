import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <nav className="head">
            <header> my Todo App </header>  
            <Link style={linkStyle} to="/"> Home | </Link> 
            <Link style={linkStyle} to="/about"> About </Link>         
        </nav>
    )
}

const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '15px'
}

export default Header