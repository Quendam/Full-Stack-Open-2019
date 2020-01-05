import axios from 'axios'
const baseUrl = BACKEND_URL+'/api/users'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await axios.get(baseUrl)

  return response.data
}

const create = async (data) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, data, config)
  return response
}

const update = async (data) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.put(baseUrl+'/'+data.id, data, config)
  return response
}

const remove = async (data) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.delete(baseUrl+'/'+data.id, config)
  return response
}

export default { getAll, create, update, remove, setToken }