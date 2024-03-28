import NavButton from './NavButton.js'
import { useNavigate } from 'react-router-dom'
import LoginDisplay from './LoginDisplay.js'
import { useContext } from 'react'
import { UserContext } from '../utilities/UserProvider.js'

import './Header.css'

function Header () {
  const navigate = useNavigate()

  const userContext = useContext(UserContext)

  const onClickHomeButton = () => {
    navigate('/')
  }

  const onClickSearchButton = () => {
    navigate('/search')
  }

  const onClickProfileButton = () => {
    navigate('/profile')
  }

  return (
    <div>
      <div className='Header-login-container'>
        <h1 className='Header-login-name'>EasyNav</h1>
        <LoginDisplay />
      </div>
      <div className='Header-navbar-container'>
        <NavButton text='Home' onClick={onClickHomeButton} />
        <NavButton text='Search' onClick={onClickSearchButton} />
        {userContext.state.user && (
          <NavButton text='Profile' onClick={onClickProfileButton} />
        )}
      </div>
    </div>
  )
}

export default Header
