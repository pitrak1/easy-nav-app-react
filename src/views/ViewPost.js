import Header from './components/Header.js'
import { useEffect, useState } from 'react'
import { get } from './utilities/Request.js'
import { expressUrl } from './utilities/ExternalUrls.js'
import { useParams } from 'react-router-dom'

import './ViewPost.css'

function ViewPost () {
  const { blogId, postId } = useParams()
  const [post, setPost] = useState([])

  useEffect(() => {
    const effect = async () => {
      try {
        const response = await get(expressUrl(`/blogs/${blogId}/posts/${postId}`))
        setPost(response.data.post)
      } catch (err) {
        console.log(err)
      }
    }

    effect()
  }, [])

  return (
    <div>
      <Header />
      <div className='ViewBlog-container'>
        <h1>{post.name}</h1>
        <div>{post.contents}</div>
      </div>
    </div>
  )
}

export default ViewPost
