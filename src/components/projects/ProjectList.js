import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProjectSummary from './ProjectSummary'
import firebase from "../../config/fb.config";

const ProjectList = () => {
    const  projects = useSelector(state => state.projects)
    const projectCollection = firebase.firestore().collection('projects')
    console.log(projects)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     projectCollection.get().then(docs => {
    //         console.log(docs.docs)
    //         return docs.docs
    //         // let projects = docs.docs.map(doc => ({id: doc.id, ...doc.data()}))
    //         // console.log(projects)
    //         // dispatch({
    //         //     type: 'GET_PROJECTS', 
    //         //     projects: docs.map(doc => ({id: doc.id, ...doc.data()}))
    //         // })
    //     }).then(projects => {console.log(projects)}).catch(error => {
    //         console.log(error)
    //     })
    //     // eslint-disable-next-line
    // }, [])
    
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
