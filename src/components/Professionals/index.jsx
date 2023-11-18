import './Professionals.css';
import barber from '/assets/barber.jpg';
import barber2 from '/assets/barber2.jpg';

function Professionals() {
    return (
        <section className='professionals'>
            <h2>Os melhores profissionais</h2>
            <p>
                Nossa equipe de barbeiros é formada por profissionais habilidosos e apaixonados pelo que fazem.
                Com expertise em cortes de cabelo e estilos de barba, eles estão prontos para criar um visual
                que reflita sua personalidade única. Com atendimento personalizado e atenção aos detalhes, nossa
                equipe fará você se sentir confiante e renovado.
            </p>
            
            <div className='professionals-img-container'>
                <img src={barber} alt="Barbeiro cortando cabelo"/>
                <img src={barber2} alt="Barbeiro cortando cabelo" className='barber2'/>
            </div>
        </section>
    )
}

export default Professionals;