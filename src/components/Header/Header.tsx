import React, { FC } from 'react';
import './Header.css';
import Button from '../Button/Button';
import Logo from '../../assets/cogumelo.png';

const Header: React.FC = () => {
    return (
        <nav className="header">
            <ul className="head-list">
                <li className="head-logo">
                    <img src={Logo} alt="Logo" />
                </li>
                <li className="head-item">
                    <a href="/" className="head-link">BEM</a>
                </li>
                <li style={{ marginLeft: 'auto' }} >
                    <Button backgroundColor={"#a65f3e"} text="entrar" />
                </li>
                <li>
                    <Button text="cadastrar" />
                </li>
            </ul>
        </nav>
    );
}

export default Header;
