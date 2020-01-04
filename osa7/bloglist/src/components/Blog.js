import React from 'react'
import { Link } from 'react-router-dom'

const Blog = ({ blog, onLike, onDelete, user }) => {

  return (
    <div className='blog-entry'>
      <div className='title'>
        <Link to={`/blogs/${blog.id}`}>
          {blog.title} {blog.author}
        </Link>
      </div>
    </div>
  )
}

export default Blog