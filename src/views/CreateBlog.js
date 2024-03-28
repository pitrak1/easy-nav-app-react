import Header from './components/Header.js'
import TextInput from './components/TextInput.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { post } from './utilities/Request.js'
import { expressUrl } from './utilities/ExternalUrls.js'

import './CreateBlog.css'

function CreateBlog () {
  const navigate = useNavigate()

  const [name, setName] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = async () => {
    try {
      await post(expressUrl('/blogs'), { name })
      navigate('/profile')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Header />
      <div className='CreateBlog-form-container'>
        <TextInput
          text='Name'
          id='name'
          value={name}
          onChange={handleNameChange}
        />
        <input type='button' value='Create Blog' onClick={handleSubmit} className='CreateBlog-form-submit-button' />
      </div>
    </div>
  )
}

export default CreateBlog
