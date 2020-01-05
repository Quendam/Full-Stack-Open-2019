import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Blog from './SimpleBlog'

afterEach(cleanup)

test('renders content', () => {
  const blog = {
    title: 'Testing title',
    author: 'Tester Author',
    likes: 10,
  }

  const component = render(
    <Blog blog={blog} />
  )

  const title = component.container.querySelector('.blog-title')
  expect(title).toHaveTextContent(
    `${blog.title} ${blog.author}`
  )

  const likes = component.container.querySelector('.blog-likes')
  expect(likes).toHaveTextContent(
    `blog has ${blog.likes} likes`
  )
})

test('clicking the like button twice calls event handler twice', async () => {
  const blog = {
    title: 'Testing title',
    author: 'Tester Author',
    likes: 10,
  }

  const mockHandler = jest.fn()

  const { getByText } = render(
    <Blog blog={blog} onClick={mockHandler} />
  )

  const button = getByText('like')
  fireEvent.click(button)
  fireEvent.click(button)

  expect(mockHandler.mock.calls.length).toBe(2)
})