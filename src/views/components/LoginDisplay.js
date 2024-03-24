import {useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {expressUrl} from '../utilities/ExternalUrls.js'
import {get} from '../utilities/Request.js'
import HeaderButton from './HeaderButton.js'

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

  const onClickProfileButton = () => {
    console.log("profile")
  }

  if (loading) {
    return <div>Loading...</div>
  } else if (userData) {
    return <div className="LoginDisplay-container">
      <HeaderButton text={userData.name} onClick={onClickProfileButton} />
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
