import {useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {expressUrl} from '../utilities/ExternalUrls.js'
import {get} from '../utilities/Request.js'

import './Header.css';

function LoginDisplay() {
  const navigate = useNavigate()

  const [loading, setLoading] = useState()
  const [userData, setUserData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem('token')
      if (!userData && token) {
        setLoading(true)
        const response = await get(expressUrl('/me'))
        setUserData(response.data.user)
        setLoading(false)
      }   
    }

    fetchData()
  })

  const onClickLoginButton = () => {
    navigate("/login")
  }

  const onClickRegisterButton = () => {
    navigate("/register")
  }

  const onClickLogoutButton = () => {
    sessionStorage.removeItem('token') 
    window.location.reload()
  }

  if (loading) {
    return <div>Loading...</div>
  } else if (userData) {
    return <div>
      <div>Hello {userData.name}</div>
      <input type="button" value="Logout" onClick={onClickLogoutButton} className="Header-login-button"/>
    </div>
  } else {
    return (
      <div>
        {loading && <div>LOADING</div>}
        <input type="button" value="Login" onClick={onClickLoginButton} className="Header-login-button"/>
        <input type="button" value="Register" onClick={onClickRegisterButton} className="Header-login-button"/>
      </div>
    );
  }
}

export default LoginDisplay;
