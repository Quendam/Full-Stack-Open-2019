import React, { useState } from 'react'
const Blog = ({ blog, onLike, onDelete, user }) => {
  const [open, setOpen] = useState(false)
  const ownBlog = user.username === blog.user.username

  const detailsOpen = { display: open ? '' : 'none' }
  const toggleOpen = () => setOpen(!open)
  const handleLikePress = () => {
    onLike(blog)
  }

  const handleRemove = () => {
    if(window.confirm(`remove blog ${blog.title} by ${blog.author}`)){
      onDelete(blog)
    }
  }


  return(
    <div className='blog-entry'>
      <div onClick={toggleOpen} className='title'>
        {blog.title} {blog.author}
      </div>
      <div style={detailsOpen} className='details'>
        <a href={blog.url}>{blog.url}</a><br/>
        {blog.likes} likes <button onClick={handleLikePress}>like</button><br/>
        added by {blog.user.name}<br/>
        {ownBlog &&
          <button onClick={handleRemove}>remove</button>
        }
      </div>
    </div>
  )
}

export default Blog