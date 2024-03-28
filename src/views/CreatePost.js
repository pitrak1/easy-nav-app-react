import Header from './components/Header.js'
import TextInput from './components/TextInput.js'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { post } from './utilities/Request.js'
import { expressUrl } from './utilities/ExternalUrls.js'

import './CreatePost.css'

function CreatePost () {
  const navigate = useNavigate()

  const { blogId } = useParams()

  const [name, setName] = useState('')
  const [contents, setContents] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleContentsChange = (e) => {
    setContents(e.target.value)
  }

  const handleSubmit = async () => {
    try {
      await post(expressUrl(`/blogs/${blogId}/posts`), { name, contents })
      navigate(`/blogs/${blogId}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Header />
      <div className='CreatePost-form-container'>
        <TextInput
          text='Name'
          id='name'
          value={name}
          onChange={handleNameChange}
        />
        <div className='CreatePost-form-field-container'>
          <label htmlFor='contents' className='CreatePost-form-field-label'>
            Contents
          </label>
          <textarea
            id='contents'
            onChange={handleContentsChange}
            value={contents}
            rows={12}
            cols={100}
            className='CreatePost-contents-input'
          />
        </div>
        <input type='button' value='Create Post' onClick={handleSubmit} className='CreatePost-form-submit-button' />
      </div>
    </div>
  )
}

export default CreatePost
