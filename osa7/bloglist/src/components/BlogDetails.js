import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Card } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

const BlogDetails = ({ blogs, selected, user, onLike, onDelete, onAddComment, history }) => {
  const [newComment, setNewComment] = useState('')

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
      history.push('/')
    }
  }
  const commentsList = blog.comments.map((comment, idx) => <li key={idx}>{comment}</li>)

  const handleAddComment = () => {
    onAddComment(blog.id, newComment)
    setNewComment('')
  }

  return (
    <div className='blog-details'>

      <Card>
        <Card.Header>
          {blog.title} {blog.author}
        </Card.Header>
        <Card.Body>
          <p>
            <a href={blog.url}>{blog.url}</a>
          </p>

          <p>
            {blog.likes} likes
            <Button onClick={handleLikePress} variant='success'>
                Like
            </Button>
          </p>

          <h3>
              comments
          </h3>
          <p>
            <input
              type='text'
              value={newComment}
              onChange={({ target }) => setNewComment(target.value)}
              data-cy='blog-comment-entry'
            />
            <Button onClick={handleAddComment} data-cy='blog-comment-add'>
                add comment
            </Button>
          </p>
          <ul>
            {commentsList}
          </ul>
        </Card.Body>
        <Card.Footer>
            added by {blog.user.name}

          {ownBlog &&
              <Button onClick={handleRemove} variant='danger'>
                remove
              </Button>
          }
        </Card.Footer>
      </Card>
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
)(withRouter(BlogDetails))