import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <div>
            <nav>
                <Link className="App-link" to="/">Home</Link> |
                <Link className="App-link" to="/favourite">Favourite</Link> |
            </nav>
        </div>
    )
}

export default Navbar