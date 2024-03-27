import {useNavigate} from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import {expressUrl} from '../utilities/ExternalUrls.js'
import {get} from '../utilities/Request.js'
import {UserContext} from '../utilities/UserProvider.js'
import HeaderButton from './HeaderButton.js'

function LoginDisplay() {
  const navigate = useNavigate()
  const userContext = useContext(UserContext)

  const onClickLoginButton = () => {
    navigate("/login")
  }

  const onClickRegisterButton = () => {
    navigate("/register")
  }

  const onClickLogoutButton = () => {
    sessionStorage.removeItem('token')
    userContext.actions.setUser(null)
  }

  const onClickProfileButton = () => {
    console.log("profile")
  }

  if (userContext.state.user) {
    return <div className="LoginDisplay-container">
      <HeaderButton text={userContext.state.user.name} onClick={onClickProfileButton} />
      <HeaderButton text="Logout" onClick={onClickLogoutButton} />
    </div>
  } else {
    return (
      <div className="LoginDisplay-container">
        <HeaderButton text="Login" onClick={onClickLoginButton} />
        <HeaderButton text="Register" onClick={onClickRegisterButton} />
      </div>
    );
  }
}

export default LoginDisplay;
