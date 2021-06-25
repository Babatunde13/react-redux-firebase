import React from 'react'
import {Link} from 'react-router-dom'

const ProjectSummary = ({id, title, content, date}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title"><Link to={`project/${id}`}>{title}</Link></span>
                <p>{content}</p>
                <p className="grey-text">{date}</p>
            </div>
        </div>
    )
}

export default ProjectSummary
