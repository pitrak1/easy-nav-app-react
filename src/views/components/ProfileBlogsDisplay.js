import BlogTile from './BlogTile.js'
import { useEffect, useState } from 'react'
import { get } from '../utilities/Request.js'
import { expressUrl } from '../utilities/ExternalUrls.js'

import './ProfileBlogsDisplay.css'

function ProfileBlogsDisplay () {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const effect = async () => {
      try {
        const response = await get(expressUrl('/profile'))
        setBlogs(response.data.profile)
      } catch (err) {
        console.log(err)
      }
    }

    effect()
  }, [])

  return (
    <div className='ProfileBlogsDisplay-container'>
      {blogs.map(blog => (
        <div key={blog.id} className='ProfileBlogsDisplay-tile'>
          <BlogTile blog={blog} />
        </div>
      ))}
    </div>
  )
}

export default ProfileBlogsDisplay
