import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Add = () => {
    const [input, setInput] = new useState(
        {
            "vistorName": "",
            "vistorPhone": "",
            "vistorAadhar": "",
            "vistorPlace": "",
            "PurposeOfVisit": ""
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3000/api/visitor/add", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully added")
                    setInput(
                        {
                            "vistorName": "",
                            "vistorPhone": "",
                            "vistorAadhar": "",
                            "vistorPlace": "",
                            "PurposeOfVisit": ""
                        }
                    )

                } else {
                    alert("Something went wrong")

                }
            }
        )
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Visitor name</label>
                                <input type="text" className="form-control" name="vistorName" value={input.vistorName} onChange={inputHandler} />
                            </div>
                            <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone number</label>
                                <input type="text" className="form-control" name="vistorPhone" value={input.vistorPhone} onChange={inputHandler} />
                            </div>
                            <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Purpose of visit</label>
                                <input type="text" className="form-control" name="PurposeOfVisit" value={input.PurposeOfVisit} onChange={inputHandler} />
                            </div>
                            <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Adhar number</label>
                                <input type="text" className="form-control" name="vistorAadhar" value={input.vistorAadhar} onChange={inputHandler} />
                            </div>
                            <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Place</label>
                                <input type="text" className="form-control" name="vistorPlace" value={input.vistorPlace} onChange={inputHandler} />
                            </div>
                            <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValues}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add