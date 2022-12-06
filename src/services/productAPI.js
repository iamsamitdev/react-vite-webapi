import http from './configAxios'

// การอ่านข้อมูลสินค้าจาก API
const getAllProduct = () => {
  return http.get('products')
}

export default {
  getAllProduct
}

