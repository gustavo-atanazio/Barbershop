import './Presentation.css';
import barbershop from '/assets/barbershop.jpg';

function Presentation() {
    return (
        <section className='presentation'>
            <div className='presentation-text-container'>
                <h2>A sua barbearia de confiança</h2>
                <p>
                    Na Barbershop você encontra cortes de cabelo elegantes, barbas impecáveis e
                    tratamentos faciais revigorantes. Nossa equipe experiente combina técnicas tradicionais
                    com toques modernos para resultados incríveis. Desfrute de um ambiente agradável enquanto
                    cuidamos do seu estilo com profissionalismo.
                </p>
            </div>

            <div className='presentation-img-container'>
                <img src={barbershop} alt="Salão de barbearia"/>
            </div>
        </section>
    )
}

export default Presentation;