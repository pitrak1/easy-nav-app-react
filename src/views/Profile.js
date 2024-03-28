import Header from './components/Header.js'
import ProfileBlogsDisplay from './components/ProfileBlogsDisplay.js'
import { useNavigate } from 'react-router-dom'

import './Profile.css'

function Profile () {
  const navigate = useNavigate()

  const onClickCreateButton = async () => {
    navigate('/blogs/create')
  }

  return (
    <div>
      <Header />
      <div className='Profile-section-container'>
        <h1>Your Blogs</h1>
        <ProfileBlogsDisplay />
        <input type='button' onClick={onClickCreateButton} value='Create a Blog' className='Profile-button' />
      </div>
    </div>
  )
}

export default Profile
