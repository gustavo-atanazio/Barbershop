import './Form.css';
import InputField from 'components/InputField';

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
                    type='number'
                    placeholder='Insira seu número de telefone'
                />

                <div className="mid-container">
                    <p>Como prefere o nosso contato?</p>
                    <div>
                        <input type="radio" name='option'/>
                        Email
                    </div>

                    <div>
                        <input type="radio" name='option'/>
                        Telefone
                    </div>

                    <div>
                        <input type="radio" name='option' defaultChecked/>
                        WhatsApp
                    </div>
                </div>

                <div className='checkbox-container'>
                    <input type="checkbox" defaultChecked/>
                    Gostaria de receber nossas novidades por email?
                </div>

                <button type='submit'>Enviar</button>

                <div className='schedule-container'>
                    <span>Horário de atendimento</span>
                    <p>Segunda à sexta: 9h às 17h.</p>
                    <p>Sábado e domingo: 8h às 18h.</p>
                </div>
            </form>
        </div>
    )
}

export default Form;