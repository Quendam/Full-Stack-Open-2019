import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import LoginForm from './components/LoginForm'
import Blog from './components/Blog'
import loginService from './services/login'
import blogService from './services/blogs'
import UserInfo from './components/UserInfo'
import BlogForm from './components/BlogForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import { setNotification } from './reducers/notificationReducer'

import './App.css'

const App = (props) => {
  const [user, setUser] = useState(null)
  const [blogs, setBlogs] = useState([])

  const handleLogin = async (username, password) => {
    try{
      const user = await loginService.login(
        username, password
      )

      if(user.token){

        window.localStorage.setItem(
          'loggedBlogappUser', JSON.stringify(user)
        )

        blogService.setToken(user.token)
        setUser(user)

        props.setNotification(`${user.name} has logged in`, 'info', 5)
      }else{
        setUser(null)

        props.setNotification('wrong username or password', 'error', 5)
      }
    } catch(execption) {
      setUser(null)

      props.setNotification('Error while processing login', 'error', 5)
    }
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('loggedBlogappUser')
  }

  const handleAddBlog = async (blog) => {
    const response = await blogService.create(blog)

    if(response.status === 201){
      const receivedBlogs = await blogService.getAll()
      setBlogs(receivedBlogs)

      props.setNotification(`a new blog ${blog.title} by ${blog.author} added`, 'info', 5)
    }else {
      props.setNotification('Error while adding blog', 'error', 5)
    }
  }

  const handleAddLike = async (blog) => {

    blog.likes++
    blog.user = blog.user.id
    blog.author = blog.author || ''
    try{
      const response = await blogService.update(blog)
      if(response.status === 200){
        const receivedBlogs = await blogService.getAll()
        setBlogs(receivedBlogs)

        props.setNotification(`like addd to blog ${blog.title}`, 'info', 5)
      }else {
        props.setNotification('Error while adding like', 'error', 5)
      }
    }catch(execption){
      console.log('error adding like', execption.response)
    }
  }

  const handleDeleteBlog = async (blog) => {

    try{
      const response = await blogService.remove(blog)

      if(response.status === 204){
        const receivedBlogs = await blogService.getAll()
        setBlogs(receivedBlogs)

        props.setNotification(`blog ${blog.title} removed`, 'info', 5)
      }else {
        props.setNotification('Error while removing blog', 'error', 5)
      }
    }catch(execption){
      console.log('error removing blog', execption.response)
    }
  }

  useEffect(() => {
    blogService
      .getAll()
      .then(receivedBlogs => setBlogs(receivedBlogs))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])


  if(!user){
    return (
      <div>
        <h2>Login to application</h2>
        <Notification />
        <LoginForm
          onLogin={handleLogin}
        />
      </div>
    )
  }

  const blogList = blogs.map(entry =>
    <Blog
      key={entry.id}
      blog={entry}
      onLike={handleAddLike}
      onDelete={handleDeleteBlog}
      user={user}
    />
  )

  return (
    <div>
      <h1>Blogs</h1>
      <Notification />

      <UserInfo
        user={user}
        onLogout={handleLogout}
      />
      <Togglable
        buttonLabel='new blog'
      >
        <BlogForm
          onCreate={handleAddBlog}
        />
      </Togglable>
      {blogList}
    </div>
  )
}

const mapDispatchToProps = {
  setNotification
}

export default connect(
  null,
  mapDispatchToProps
)(App)
