let initState = []

const projectReducer = async (state=initState, action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            return [action.project, ...state]
        case 'GET_PROJECTS':
            console.log(action)
            return action.projects
        case 'ADD_PROJECT_ERROR':
            console.log(action)
            break;
        case 'DELETE_PROJECT':
            return state.filter(project => project.id !== action.project.id)
        case 'EDIT_PROJECT':
            return state.map(project => project.id === action.project.id ? action.project : project)
        default:
            return state
    } 
}

export default projectReducer
