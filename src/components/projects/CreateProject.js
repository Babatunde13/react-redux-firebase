import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import firebase from '../../config/fb.config'

const CreateProject = () => {
    const projectCollection = firebase.firestore().collection('projects')
    const dispatch = useDispatch()
    const history = useHistory()
    const [CreateProjectData, setCreateProjectData] = useState({
        title: '', 
        content: ''
    })

    const submit = e => {
        e.preventDefault();
        projectCollection.add({
            ...CreateProjectData, authorFirstName: 'Babatunde', authorLastName: 'Koiki', authorId: '12345',
            createdAt: new Date()
        }).then(project => {    
            dispatch({
                type: 'ADD_PROJECT', 
                project: {id: project.id, ...CreateProjectData}
            })
        }).catch(error => {
            dispatch({
                type: 'ADD_PROJECT_ERROR', 
                project: error.message
            })
        })
        history.push('/')
    }
    const handleChange =e => {
        const {id, value} = e.target
        setCreateProjectData({...CreateProjectData, [id]: value})
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
