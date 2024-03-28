import { useNavigate } from 'react-router-dom'

import './PostTile.css'

function PostTile ({ post }) {
  const navigate = useNavigate()

  const onClickViewButton = async () => {
    navigate(`/blogs/${post.id}`)
  }

  return (
    <div className='PostTile-container'>
      <div className='PostTile-post-info'>
        <h2 className='PostTile-name'>{post.name}</h2>
        <div className='PostTile-word-count'>Words: {post.wordCount}</div>
      </div>
      <input
        type='button'
        value='View'
        onClick={onClickViewButton}
        className='PostTile-view-button'
      />
    </div>
  )
}

export default PostTile
