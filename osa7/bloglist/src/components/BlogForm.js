import React from 'react'
import { useField } from '../hooks'

const BlogForm = ({ onCreate }) => {
  const { reset: titleReset, ...title } = useField('')
  const { reset: authorReset, ...author } = useField('')
  const { reset: urlReset, ...url } = useField('')

  const handleAddBlog = () => {
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
    <div>
      <h1>Create</h1>
      Title: <input {...title} type='text' /><br/>
      Author: <input {...author} type='text' /><br/>
      Url: <input {...url} type='text'/><br/>

      <button onClick={handleAddBlog}>Create</button>
      <button onClick={handleResetFields}>Reset</button>
    </div>
  )
}

export default BlogForm