import { memo } from 'react';
import './Card.css';

function Card({ imagem, titulo, preco, descricao }) {
    return (
        <div className='card'>
            <div>
                <img src={imagem} alt={titulo}/>
            </div>

            <div className="card-info">
                <h3>{titulo}</h3>
                <span>{preco}</span>
                <p>{descricao}</p>
            </div>
        </div>
    )
}

export default memo(Card);