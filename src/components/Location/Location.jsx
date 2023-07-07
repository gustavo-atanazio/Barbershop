import './Location.css';

function Location() {
    return (
        <section className="location">
            <h2>Conheça nosso estabelecimento</h2>

            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29257.442772634997!2d-46.70904251250183!3d-23.561965455139518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5798cb16268f%3A0xa94014a3e39a3708!2sPinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1688743402890!5m2!1spt-BR!2sbr"
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default Location;