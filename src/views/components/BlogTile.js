import { useNavigate } from 'react-router-dom'

import './BlogTile.css'

function BlogTile ({ blog }) {
  const navigate = useNavigate()

  const onClickViewButton = async () => {
    navigate(`/blogs/${blog.id}`)
  }

  return (
    <div className='BlogTile-container'>
      <h2 className='BlogTile-name'>{blog.name}</h2>
      <div className='BlogTile-post-count'>Posts: {blog.count}</div>
      <input
        type='button'
        value='View'
        onClick={onClickViewButton}
        className='BlogTile-view-button'
      />
    </div>
  )
}

export default BlogTile
