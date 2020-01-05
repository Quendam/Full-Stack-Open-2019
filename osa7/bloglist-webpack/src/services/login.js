import axios from 'axios'
const baseUrl = BACKEND_URL+'/api/login'

const login = async (username, password) => {
  try{

    const response = await axios.post(baseUrl, {
      username: username,
      password: password
    })

    return response.data

  } catch (exception){
    return exception.response.data

  }
}

export default { login }