import Header from './components/Header.js'
import {useState, useContext} from 'react'
import {expressUrl} from './utilities/ExternalUrls.js'
import {post} from './utilities/Request.js'
import {useNavigate} from 'react-router-dom'
import TextInput from './components/TextInput.js'
import {UserContext} from './utilities/UserProvider.js'

import './Register.css'

function Register() {
  const [name, setName] = useState('');
  const [nameErrorText, setNameErrorText] = useState('');
  const [password, setPassword] = useState('');
  const [passwordErrorText, setPasswordErrorText] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordErrorText, setConfirmPasswordErrorText] = useState('');

  const navigate = useNavigate();
  const userContext = useContext(UserContext)

  const handleSubmit = async () => {
    const nameValid = validateName()
    const passwordValid = validatePassword()
    const confirmPasswordValid = validateConfirmPassword()

    if (nameValid && passwordValid && confirmPasswordValid) {
      try {
        const response = await post(
          expressUrl('/register'),
          {name, password, confirmPassword}
        )
        sessionStorage.setItem("token", response.data.token)
        userContext.actions.setUser(response.data.user)
        navigate('/')
      } catch(error) {  
        console.log(error);
      }
    }
  }

  const validateName = () => {
    const regex = new RegExp('^([a-zA-Z0-9_-]){8,18}$')

    if (regex.test(name)) {
      setNameErrorText('')
      return true
    } else {
      setNameErrorText('Usernames must be between 8 and 18 alphanumeric characters')
      return false
    }
  }

  const validatePassword = () => {
    const regex = new RegExp('^.{8,18}$')

    if (regex.test(name)) {
      setPasswordErrorText('')
      return true
    } else {
      setPasswordErrorText('Passwords must be between 8 and 18 characters')
      return false
    }
  }

  const validateConfirmPassword = () => {
    if (password === confirmPassword) {
      setConfirmPasswordErrorText('')
      return true
    } else {
      setConfirmPasswordErrorText('Passwords must match')
      return false
    }
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }

  return (
    <div>
      <Header />
      <div className="Register-form-container">
        <div className="Register-form-field">
          <TextInput
            text="Username"
            id="name"
            value={name}
            onChange={handleNameChange}
            errorText={nameErrorText}
          />
        </div>
        <div className="Register-form-field">
          <TextInput
            text="Password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            errorText={passwordErrorText}
            isPassword={true}
          />
        </div>
        <div className="Register-form-field">
          <TextInput
            text="Confirm Password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            errorText={confirmPasswordErrorText}
            isPassword={true}
          />
        </div>
        <input type="button" value="Create Account" onClick={handleSubmit} className="Register-form-submit-button"/>
      </div>
    </div>
  );
}

export default Register;
