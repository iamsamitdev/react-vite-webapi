import MainLayout from "../components/layouts/MainLayout"

import api from '../services/productAPI'

import { useState, useEffect } from 'react'

const Dashboard = () => {

  // สร้างตัวแปรไว้เก็บข้อมูลสินค้าจาก API
  const [products, setProducts] = useState([])

  // อ่านข้อมูลสินค้าจาก API
  useEffect(() => {
    api.getAllProduct().then(result => {
      console.log(result.data)
      // Set product
      setProducts(result.data)
    })
  },[])

  return (
    <MainLayout>
      <div className="container-fluid px-4 pt-4">
        <h1>Products</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Detail</th>
                    <th>Barcode</th>
                    <th>Qty</th>
                    <th>Category</th>
                    <th>Date</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <td>1</td>
                    <td>xxx</td>
                    <td>xxx</td>
                    <td>xxx</td>
                    <td>xxx</td>
                    <td>xxx</td>
                    <td>xxx</td>
                    <td>xxx</td>
                    <td>xxx</td>
                </tr>           
            </tbody>
          </table>
      </div>
    </MainLayout>
  )
}

export default Dashboard