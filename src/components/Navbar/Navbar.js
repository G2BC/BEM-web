import React from 'react'
import './Navbar.css'
import Button from '../Button/Button'
import Logo from '../../assets/cogumelo.png'

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
            <li className="nav-logo">
                <img src={Logo} alt="Logo" />
            </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">WebFungi</a>
                </li>
                <li style={{ marginLeft: 'auto' }} >
                    <Button backgroundColor={"#FF0000"} text="entrar" />
                </li>
                <li>
                    <Button text="cadastrar" />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar