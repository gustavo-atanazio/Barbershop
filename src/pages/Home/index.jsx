import barbershop from '/assets/barbershop.jpg';
import barber from '/assets/barber.jpg';
import barber2 from '/assets/barber2.jpg';
import './Home.css';

function Home() {
    return (
        <>
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
                    <img src={barbershop} alt="Salão de barbearia" />
                </div>
            </section>

            <section className='professionals'>
                <h2>Os melhores profissionais</h2>
                <p>
                    Nossa equipe de barbeiros é formada por profissionais habilidosos e apaixonados pelo que fazem.
                    Com expertise em cortes de cabelo e estilos de barba, eles estão prontos para criar um visual
                    que reflita sua personalidade única. Com atendimento personalizado e atenção aos detalhes, nossa
                    equipe fará você se sentir confiante e renovado.
                </p>

                <div className='professionals-img-container'>
                    <img src={barber} alt="Barbeiro cortando cabelo" />
                    <img src={barber2} alt="Barbeiro cortando cabelo" className='barber2' />
                </div>
            </section>

            <section className="location">
                <h2>Conheça nosso estabelecimento</h2>

                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29257.442772634997!2d-46.70904251250183!3d-23.561965455139518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5798cb16268f%3A0xa94014a3e39a3708!2sPinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1688743402890!5m2!1spt-BR!2sbr"
                        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </>
    )
}

export default Home;