import React from 'react'
import { useField } from '../hooks'
import { Form, ButtonToolbar, Button } from 'react-bootstrap'

const BlogForm = ({ onCreate }) => {
  const { reset: titleReset, ...title } = useField('')
  const { reset: authorReset, ...author } = useField('')
  const { reset: urlReset, ...url } = useField('')

  const handleAddBlog = (e) => {
    e.preventDefault()

    onCreate({
      title: title.value,
      author: author.value,
      url: url.value,
    })
    handleResetFields()
  }

  const handleResetFields = () => {
    titleReset()
    authorReset()
    urlReset()
  }

  return(
    <Form onSubmit={handleAddBlog}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control {...title} type="text" placeholder="Enter title"  />
      </Form.Group>

      <Form.Group controlId="formAuthor">
        <Form.Label>Author</Form.Label>
        <Form.Control {...author} type="text" placeholder="Enter author"  />
      </Form.Group>

      <Form.Group controlId="formUrl">
        <Form.Label>Url</Form.Label>
        <Form.Control {...url} type="text" placeholder="Enter url"  />
      </Form.Group>

      <ButtonToolbar className='form-buttons'>
        <Button variant="primary" type='submit'>
          Create
        </Button>
        <Button variant="danger" onClick={handleResetFields}>
          Reset
        </Button>
      </ButtonToolbar>
    </Form>
  )
}

export default BlogForm