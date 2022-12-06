import Axios from 'axios'

const BASE_URL = 'https://www.itgenius.co.th/sandbox_api/cpallstockapi/public/api/'

// Config Axios

export default Axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})