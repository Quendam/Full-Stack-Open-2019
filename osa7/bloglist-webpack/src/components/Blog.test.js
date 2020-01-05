import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Blog from './Blog'

const blog = {
  title: 'Testing title',
  author: 'Tester Author',
  likes: 10,
  url: 'http://testing.lo/blog',
  user: {
    username: 'tester',
    name: 'Tester User',
  }
}
const user = {
  username: 'tester',
  name: 'Tester User',
}

afterEach(cleanup)

describe('<Blog />', () => {
  let component

  beforeEach(() => {
    component = render(
      <Blog
        blog={blog}
        user={user}
      />
    )
  })

  test('Renders content with details closed', () => {
    const title = component.container.querySelector('.blog-entry .title')
    expect(title).toHaveTextContent(
      `${blog.title} ${blog.author}`
    )

    const details = component.container.querySelector('.blog-entry .details')
    expect(details).toHaveStyle('display: none')
  })


  test('renders details after title clicked', () => {
    const title = component.container.querySelector('.blog-entry .title')
    const details = component.container.querySelector('.blog-entry .details')
    fireEvent.click(title)

    expect(details).not.toHaveStyle('display: none')
  })

})