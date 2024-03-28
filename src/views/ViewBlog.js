import Header from './components/Header.js'
import { useEffect, useState } from 'react'
import { get } from './utilities/Request.js'
import { expressUrl } from './utilities/ExternalUrls.js'
import PostTile from './components/PostTile.js'
import { useParams, useNavigate } from 'react-router-dom'

import './ViewBlog.css'

function ViewBlog () {
  const { blogId } = useParams()
  const [posts, setPosts] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    const effect = async () => {
      try {
        const response = await get(expressUrl(`/blogs/${blogId}`))
        setPosts(response.data.posts)
      } catch (err) {
        console.log(err)
      }
    }

    effect()
  }, [])

  const onClickCreateButton = async () => {
    navigate(`/blogs/${blogId}/posts/create`)
  }

  return (
    <div>
      <Header />
      <div className='ViewBlog-container'>
        <h1>Your Posts</h1>
        {posts.map(post => (
          <div key={post.id} className='ViewBlog-post-container'>
            <PostTile post={post} />
          </div>
        ))}
        <input type='button' onClick={onClickCreateButton} value='Create a Post' className='ViewBlog-button' />
      </div>
    </div>
  )
}

export default ViewBlog
