import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProjectSummary from './ProjectSummary'

const ProjectList = () => {
    const dispatch = useDispatch()
    const {projects} = useSelector(state => state.projects)
    const add = () => {
        dispatch({type: 'ADD_PROJECT', project: {id: projects.length+1, title: 'egg hunt with babs'+projects.length, content: 'blah blah blah'}})
    }
    return (
        <div className="project-list section">
            {projects && projects.map(project => <ProjectSummary
                add={add}
                key={project.id}
                id={project.id}
                title={project.title}
                content={project.content}
                date={project.date} />)}
        </div>
    )
}

export default ProjectList
