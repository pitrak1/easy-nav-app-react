import Header from './components/Header.js'
import {useState} from 'react'
import {expressUrl} from './utilities/ExternalUrls.js'
import {post} from './utilities/Request.js'
import {useNavigate} from 'react-router-dom'
import TextInput from './components/TextInput.js'

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
          <TextInput
            text="Username"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="Login-form-field">
          <TextInput
            text="Password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            isPassword={true}
          />
        </div>
        <input type="button" value="Login" onClick={handleSubmit} className="Login-form-submit-button"/>
      </div>
    </div>
  );
}

export default Login;
