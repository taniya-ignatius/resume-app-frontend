import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddResume = () => {
    const [input, setInput] = new useState(
        {
            "userid":"",
            "profile": "",
            "Skill": "",
            "Education": "",
            "Certifications": "",
            "Achievements": "",
            "Workexperience": "",
            "Project": "",
            "Language": ""
        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3002/api/resume/add", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Successfully added")
                    setInput(
                        {
                            "userid":"",
                            "profile": "",
                            "Skill": "",
                            "Education": "",
                            "Certifications": "",
                            "Achievements": "",
                            "Workexperience": "",
                            "Project": "",
                            "Language": ""
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
            <NavBar />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">userid</label>
                                <input type="text" className="form-control" name="userid" value={input.userid} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">PROFILE</label>
                                <input type="text" className="form-control" name="profile" value={input.profile} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Skill</label>
                                <input type="text" className="form-control" name="Skill" value={input.Skill} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Education</label>
                                <input type="text" className="form-control" name="Education" value={input.Education} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Certifications</label>
                                <input type="text" className="form-control" name="Certifications" value={input.Certifications} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Achievements</label>
                                <input type="text" className="form-control" name="Achievements" value={input.Achievements} onChange={inputHandler} />
                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Workexperience</label>
                                <input type="text" className="form-control" name="Workexperience" value={input.Workexperience} onChange={inputHandler} />
                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Project</label>
                                <input type="text" className="form-control" name="Project" value={input.Project} onChange={inputHandler} />
                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Language</label>
                                <input type="text" className="form-control" name="Language" value={input.Language} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValues}>ADD RESUME</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddResume