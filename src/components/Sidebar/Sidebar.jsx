import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
    return (
        <div id='sidebar'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Produtos</Link></li>
                <li><Link to="/contact">Contato</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar;