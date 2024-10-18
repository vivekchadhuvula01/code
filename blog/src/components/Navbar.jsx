import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
        console.log(menu);

    }
    return (
        <>
            <nav className='nav'>
                <ul className='nav-ul'>
                    <li className='nav-li'><Link to={'/'}>Home</Link></li>
                    <li className='nav-li'><Link to={'/about'}>About</Link></li>
                    <li className='nav-li'><Link to={'/articles'}>Articles</Link></li>
                </ul>
                <IoMenu  className='menuIcon' onClick={handleMenu} />
            </nav>


        </>
    )
}

export default Navbar
