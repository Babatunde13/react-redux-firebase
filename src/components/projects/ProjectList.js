import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = () => {
    return (
        <div className="project-list section">
            <ProjectSummary 
                id={1}
                title="Project Title" 
                content="Posted by Babatunde" 
                date="3rd September, 2am" />
            <ProjectSummary 
                id={1}
                title="Project Title" 
                content="Posted by Babatunde" 
                date="3rd September, 2am" />
            <ProjectSummary 
                id={1}
                title="Project Title" 
                content="Posted by Babatunde" 
                date="3rd September, 2am" />
        </div>
    )
}

export default ProjectList
