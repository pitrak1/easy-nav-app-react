import Header from './components/Header.js'
import {useState} from 'react'
import {expressUrl} from './utilities/ExternalUrls.js'
import {post} from './utilities/Request.js'
import {useNavigate} from 'react-router-dom'

import './Login.css'

function Login() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await post(
        expressUrl('/login'),
        {name, password}
      )
      sessionStorage.setItem("token", response.data.token)
      navigate('/')
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

  return (
    <div>
      <Header />
      <div className="Login-form-container">
        <div className="Login-form-field">
          <label htmlFor="name" className="Login-form-field-label">
            Username
          </label>
          <input type="text" id="name" onChange={handleNameChange} value={name} className="Login-form-field-input"/>
        </div>
        <div className="Login-form-field">
          <label htmlFor="password" className="Login-form-field-label">
            Password
          </label>
          <input type="password" id="password" onChange={handlePasswordChange} value={password} className="Login-form-field-input"/>
        </div>
        <input type="button" value="Login" onClick={handleSubmit} className="Login-form-submit-button"/>
      </div>
    </div>
  );
}

export default Login;
