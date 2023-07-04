import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { SidebarContext } from '../../context/sidebarContext';

import './Header.css';
import barberLogo from '../../assets/barber_logo.png';

import { RxHamburgerMenu } from 'react-icons/rx';

function Header() {
    const {toggle} = useContext(SidebarContext);

    return (
        <header id='header'>
            <button onClick={() => toggle()}>
                <RxHamburgerMenu/>
            </button>
            <img src={barberLogo} alt="Logo da Barbershop"/>

            <nav id='nav'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Produtos</Link></li>
                    <li><Link to="/contact">Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;