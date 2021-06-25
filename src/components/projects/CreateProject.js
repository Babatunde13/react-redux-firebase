import React, {useState} from 'react'

const CreateProject = () => {
    const [CreateProjectData, setCreateProjectData] = useState({title: '', content: ''})
    const submit = e => {
        e.preventDefault();
    }
    const handleChange =e => {
        const {id, value} = e.target
        setCreateProjectData({...CreateProjectData, [id]: value})
        console.log(CreateProjectData)
    }
    return (
        <div className="container">
            <form className="white" onSubmit={submit}>
                <h5 className="grey-text text-darken-3">Sign In</h5>
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
