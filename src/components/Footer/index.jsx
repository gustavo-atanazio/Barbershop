import './Footer.css';
import barberLogo from '/assets/barber_logo.png';

function Footer() {
    return (
        <footer id='footer'>
            <img src={barberLogo} alt="Logo da Barbershop"/>
            <p>&#169; 2023. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer;