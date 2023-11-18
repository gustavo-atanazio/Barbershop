import { useState } from 'react';
import { Link } from 'react-router-dom';

import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose, AiFillHome } from 'react-icons/ai';
import { FaShoppingCart, FaPhoneAlt } from 'react-icons/fa';

import './Header.css';
import barberLogo from '/assets/barber_logo.png';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const sidebarData = [
        {
            title: "Home",
            path: "/",
            icon: <AiFillHome/>
        },
        {
            title: "Produtos",
            path: "/products",
            icon: <FaShoppingCart/>
        },
        {
            title: "Contato",
            path: "/contact",
            icon: <FaPhoneAlt/>
        }
    ];

    return (
        <header>
            <div id='header'>
                <RxHamburgerMenu onClick={toggle}/>

                <img src={barberLogo} alt="Logo da Barbershop"/>

                <ul className='header-links'>
                    {sidebarData.map((item, index) => {
                        return (
                            <li key={index} className='header-links-text'>
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <nav className={isOpen ? 'nav active' : 'nav'}>
                <ul className='nav-items'>
                    <li className="navbar-toggle" onClick={toggle}>
                        <AiOutlineClose/>
                    </li>

                    {sidebarData.map((item, index) => {
                        return (
                            <li key={index} className='nav-text' onClick={toggle}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Header;