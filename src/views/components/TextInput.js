import './TextInput.css'

function TextInput ({ text, errorText, id, value, onChange, isPassword = false }) {
  const inputType = isPassword ? 'password' : 'text'

  return (
    <div className='TextInput-container'>
      <label htmlFor={id} className='TextInput-label'>
        {text}
      </label>
      <input type={inputType} id={id} onChange={onChange} value={value} className='TextInput-input' />
      <div className='TextInput-error-message'>{errorText}</div>
    </div>
  )
}

export default TextInput
