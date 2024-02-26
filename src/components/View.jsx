import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [data,setData]=new useState([])
    const getData=()=>{
        axios.get("http://localhost:3000/api/visitor/viewall").then(
            (response)=>{
                setData(response.data)
            }
        )
    }
    useEffect(()=>{getData()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Visitor name</th>
      <th scope="col">Phone number</th>
      <th scope="col">Purpose of visit</th>
      <th scope="col">Adhaar number</th>
      <th scope="col">Place</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map(
            (value,index)=>{
                return <tr>               
                <td>{value.vistorName}</td>
                <td>{value.vistorPhone}</td>
                <td>{value.PurposeOfVisit}</td>
                <td>{value.vistorAadhar}</td>
                <td>{value.vistorPlace}</td>
                
              </tr>
            }
        )
    }
    
  </tbody>
</table>
                </div>
            </div>
        </div> 
    </div>
  )
}
export default View