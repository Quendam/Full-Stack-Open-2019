import React, { useState } from 'react'
import { connect } from 'react-redux'

const BlogDetails = ({ blogs, selected, user, onLike, onDelete, onAddComment }) => {
  const [newComment, setNewComment] = useState("")

  const blog = blogs.reduce((prev, curr) => 
    curr.id === selected  ? curr : prev , {
      user: { username: '' },
      comments: []
    }
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
  const commentsList = blog.comments.map((comment, idx) => <li key={idx}>{comment}</li>)

  const handleAddComment = () => {
    onAddComment(blog.id, newComment)
    setNewComment('')
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

      <h3>
        comments 
      </h3>
      <p>
        <input type='text' value={newComment} onChange={({target}) => setNewComment(target.value)} />
        <button onClick={handleAddComment}>add comment</button>
      </p>
      <ul>
        {commentsList}
      </ul>
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