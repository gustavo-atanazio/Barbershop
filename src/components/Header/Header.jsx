import { useContext } from 'react';
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
        </header>
    )
}

export default Header;