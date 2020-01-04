import React from 'react'
import { connect } from 'react-redux'

const BlogDetails = ({ blogs, selected, user, onLike, onDelete }) => {
  
  const blog = blogs.reduce((prev, curr) => 
    curr.id === selected  ? curr : prev , {user: { username: '' } }
  )

  const ownBlog = user.username === blog.user.username

  const handleLikePress = () => {
    onLike(blog)
  }

  const handleRemove = () => {
    if(window.confirm(`remove blog ${blog.title} by ${blog.author}`)){
      onDelete(blog)
    }
  }

  return (
    <div className='blog-details'>
      <h2> {blog.title} {blog.author}</h2>
      <p>
        <a href={blog.url}>{blog.url}</a>
      </p>
      
      {blog.likes} likes <button onClick={handleLikePress}>like</button><br/>
      
      added by {blog.user.name}<br/>
      
      {ownBlog &&
        <button onClick={handleRemove}>remove</button>
      }
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    blogs: state.blog.blogs,
  }
}

export default connect(
  mapStateToProps,
  null
)(BlogDetails)