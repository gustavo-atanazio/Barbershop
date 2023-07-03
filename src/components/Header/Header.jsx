import './Header.css';
import barberLogo from '../../assets/barber_logo.png';

function Header() {
  return (
    <header>
        <img src={barberLogo} alt="Logo da Barbershop"/>
    </header>
  )
}

export default Header;