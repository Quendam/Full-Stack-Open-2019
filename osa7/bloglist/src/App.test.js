import React from 'react'
import {
  render, waitForElement
} from '@testing-library/react'
jest.mock('./services/blogs')
import App from './App'

const user = {
  username: 'taavi',
  token: '1231231214',
  name: 'Taavi Testaaja'
}

describe('<App />', () => {
  test('if no user logged, blogs are not rendered', async () => {
    const component = render(
      <App />
    )
    component.rerender(<App />)

    await waitForElement(
      () => component.getByText('Login')
    )

    const blogs = component.container.querySelector('.blog-entry')
    expect(blogs).toBeNull()
  })

  test('blogs are rendered if user has logged in', async () => {
    localStorage.setItem('loggedBlogappUser', JSON.stringify(user))

    const component = render(
      <App />
    )

    component.rerender(<App />)

    await waitForElement(
      () => component.getByText('logout')
    )

    const blogs = component.container.querySelector('.blog-entry')
    expect(blogs).not.toBeNull()
  })

})
