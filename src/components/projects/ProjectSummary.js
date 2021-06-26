import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'

const ProjectSummary = ({id, add, title, content, date}) => {
    const dispatch = useDispatch()
    const deleteProject = () => {
        dispatch({type: 'DELETE_PROJECT', project: {id, title, content}})
    }
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title"><Link to={`project/${id}`}>{title}</Link></span>
                <p>Posted by Babatunde</p>
                <p onClick={add} className="grey-text">3rd September, 2am</p>
                <button onClick={deleteProject}>Delete</button>
            </div>
        </div>
    )
}

export default ProjectSummary
