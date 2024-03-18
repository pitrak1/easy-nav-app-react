import Header from './components/Header.js'
import {useState} from 'react'
import axios from 'axios'
import {expressUrl} from './ExternalUrls.js'

import './Register.css'

function Register() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleSubmit = () => {
    console.log(name, password, confirmPassword)
    axios.post(
      expressUrl('/register'), 
      {name, password, confirmPassword}, 
      {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}}
    ).then((response) => {
      console.log("SUCCESS")
    }).catch((error) => {
      console.log("FAILURE")
    })
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
      </div>
    </div>
  );
}

export default Register;
