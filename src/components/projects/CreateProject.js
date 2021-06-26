import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";

const CreateProject = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const projects = useSelector(state => state.projects)
    const [CreateProjectData, setCreateProjectData] = useState({
        id: projects.length+1, 
        title: '', 
        content: ''
    })

    const submit = e => {
        e.preventDefault();
        console.log(projects)
        dispatch({
            type: 'ADD_PROJECT', 
            project: CreateProjectData
        })
        console.log(projects)
        history.push('/')
    }
    const handleChange =e => {
        const {id, value} = e.target
        setCreateProjectData({...CreateProjectData, [id]: value})
        console.log(CreateProjectData)
    }
    return (
        <div className="container">
            <form className="white" onSubmit={submit}>
                <h5 className="grey-text text-darken-3">Create New Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input 
                        id="title" 
                        type="text" 
                        onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea 
                        id="content" 
                        className="materialize-textarea" 
                        onChange={handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateProject
