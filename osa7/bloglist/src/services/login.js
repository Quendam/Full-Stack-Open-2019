import axios from 'axios'
const baseUrl = '/api/login'

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

  // return response
  //   .then(response => {
  //     return response.data
  //   })
  //   .catch(result => {
  //     return result.response.data
  //   })
}

export default { login }