import axios from 'axios'
const baseUrl = BACKEND_URL+'/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  const sortedBlogs = response.data.sort((a, b) =>
    a.likes === b.likes ? 0 :
      a.likes < b.likes ? 1 : -1
  )
  return sortedBlogs
}

const create = async (blog) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, blog, config)
  return response
}

const update = async (blog) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.put(baseUrl+'/'+blog.id, blog, config)
  return response
}

const remove = async (blog) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.delete(baseUrl+'/'+blog.id, config)
  return response
}

const addComment = async (blogId, comment) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl+'/'+blogId+'/comments', { comment: comment }, config)
  return response
}


export default { getAll, create, update, remove, setToken, addComment }