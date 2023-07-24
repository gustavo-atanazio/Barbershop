import './Form.css';
import InputField from '../InputField/InputField';

function Form() {
    return (
        <div className='form-container'>
            <form className="form">
                <InputField
                    inputName='name'
                    labelText='Nome'
                    type='text'
                    placeholder='Insira seu nome'
                    required={true}
                />

                <InputField
                    inputName='email'
                    labelText='Email'
                    type='email'
                    placeholder='Insira seu email'
                />

                <InputField
                    inputName='phone'
                    labelText='Telefone'
                    type='tel'
                    placeholder='Insira seu número de telefone'
                />

                <div className="mid-container">
                    <span>Como prefere o nosso contato?</span>
                    <div>
                        <input type="radio"/>
                        Email
                    </div>

                    <div>
                        <input type="radio"/>
                        Telefone
                    </div>

                    <div>
                        <input type="radio" defaultChecked/>
                        WhatsApp
                    </div>
                </div>

                <div>
                    <input type="checkbox" defaultChecked/>
                    Gostaria de receber nossas novidades por email?
                </div>

                <button type='submit'>Enviar</button>

                <div>
                    <span>Horário de atendimento</span>
                    <p>Segunda à sexta: 9h às 18h.</p>
                    <p>Sábado e domingo: 8h às 17h.</p>
                </div>
            </form>
        </div>
    )
}

export default Form;