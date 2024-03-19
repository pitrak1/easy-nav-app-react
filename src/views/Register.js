import Header from './components/Header.js'
import {useState} from 'react'
import {expressUrl} from './utilities/ExternalUrls.js'
import {post} from './utilities/Request.js'

import './Register.css'

function Register() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSubmit = async () => {
    try {
      const response = await post(
        expressUrl('/register'),
        {name, password, confirmPassword}
      )
      console.log(response.data)
      sessionStorage.setItem("token", response.data.token)
    } catch(error) {  
      console.log(error);
    }
  }

  const handleSubmit2 = async () => {
    try {
      const response = await post(
        expressUrl('/register/auth'),
        {name, password, confirmPassword: ''}
      )
      console.log(response.data)
      // sessionStorage.setItem("token", response.data.token)
    } catch(error) {  
      console.log(error);
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
          <label htmlFor="name" className="Register-form-field-label">
            Username
          </label>
          <input type="text" id="name" onChange={handleNameChange} value={name} className="Register-form-field-input"/>
        </div>
        <div className="Register-form-field">
          <label htmlFor="password" className="Register-form-field-label">
            Password
          </label>
          <input type="password" id="password" onChange={handlePasswordChange} value={password} className="Register-form-field-input"/>
        </div>
        <div className="Register-form-field">
          <label htmlFor="confirmPassword" className="Register-form-field-label">
            Confirm Password
          </label>
          <input type="password" id="confirmPassword" onChange={handleConfirmPasswordChange} value={confirmPassword} className="Register-form-field-input"/>
        </div>
        <input type="button" value="Create Account" onClick={handleSubmit} className="Register-form-submit-button"/>
        <input type="button" value="Create Account" onClick={handleSubmit2} className="Register-form-submit-button"/>
      </div>
    </div>
  );
}

export default Register;
