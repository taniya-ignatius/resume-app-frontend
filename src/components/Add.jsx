import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const Add = () => {
    const [input, setInput] = new useState(
        {   
            name:String,
            emailid:String,
            password:String,
            mobile:String,
            place:String
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3002/api/resume/signup", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully added")
                    setInput(
                        {   
                            name:String,
                            emailid:String,
                            password:String,
                            mobile:String,
                            place:String
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
        <NavBar/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">NAME</label>
                            <input type="text" className="form-control"  name="name" value={input.name} onChange={inputHandler}  />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">EMAIL ID</label>
                            <input type="text" className="form-control" name="emailid" value={input.emailid} onChange={inputHandler}  />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PASSWORD</label>
                            <input type="text" className="form-control"  name="password" value={input.password} onChange={inputHandler}  />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">MOBILE NO</label>
                            <input type="text" className="form-control"  name="mobile" value={input.mobile} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">PLACE</label>
                            <input type="text" className="form-control"  name="place" value={input.place} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValues}>SIGNUP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Add