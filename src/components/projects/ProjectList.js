import React from 'react'
import { useSelector } from 'react-redux'
import ProjectSummary from './ProjectSummary'

const ProjectList = () => {
    const projects = useSelector(state => state.projects)

    return (
        <div className="project-list section">
            {projects && projects.map(project => <ProjectSummary
                key={project.id}
                id={project.id}
                title={project.title}
                content={project.content}
                date={project.date} />)}
        </div>
    )
}

export default ProjectList
