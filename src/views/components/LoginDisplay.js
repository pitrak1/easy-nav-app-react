import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../utilities/UserProvider.js'
import HeaderButton from './HeaderButton.js'

function LoginDisplay () {
  const navigate = useNavigate()
  const userContext = useContext(UserContext)

  const onClickLoginButton = () => {
    navigate('/login')
  }

  const onClickRegisterButton = () => {
    navigate('/register')
  }

  const onClickLogoutButton = () => {
    sessionStorage.removeItem('token')
    userContext.actions.setUser(null)
  }

  if (userContext.state.user) {
    return (
      <div className='LoginDisplay-container'>
        <HeaderButton text='Logout' onClick={onClickLogoutButton} />
      </div>
    )
  } else {
    return (
      <div className='LoginDisplay-container'>
        <HeaderButton text='Login' onClick={onClickLoginButton} />
        <HeaderButton text='Register' onClick={onClickRegisterButton} />
      </div>
    )
  }
}

export default LoginDisplay
