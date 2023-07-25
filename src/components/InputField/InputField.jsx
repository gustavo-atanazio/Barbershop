import './InputField.css';

function InputField(props) {
    const {
        inputName = '',
        labelText = '',
        type = 'text',
        placeholder = '',
        required = false,
    } = props;

    return (
        <div className='input-container'>
            <label htmlFor={inputName}>{labelText}</label>
            <input
                type={type}
                name={inputName}
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}

export default InputField;