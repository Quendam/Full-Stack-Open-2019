import React from 'react'
import { Card } from 'react-bootstrap'

const Blog = ({ blog }) => {

  return (
    <Card >
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{blog.author}</Card.Subtitle>
        <Card.Link href={`/blogs/${blog.id}`}>Read more</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Blog