import NavButton from './NavButton.js'
import {useNavigate} from 'react-router-dom'
import LoginDisplay from './LoginDisplay.js'

import './Header.css';

function Header() {
  const navigate = useNavigate()

  const onClickHomeButton = () => {
    navigate("/")
  }

  const onClickSearchButton = () => {
    navigate("/search")
  }

  return (
    <div>
      <div className="Header-login-container">
        <h1 className="Header-login-name">EasyNav</h1>
        <LoginDisplay />
      </div>
      <div className="Header-navbar-container">
        <NavButton text="Home" onClick={onClickHomeButton}/>
        <NavButton text="Search" onClick={onClickSearchButton}/>
      </div>
    </div>
  );
}

export default Header;
