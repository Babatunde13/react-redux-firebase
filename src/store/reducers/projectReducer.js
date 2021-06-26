const initState = [
        {id: 2, title: 'collect all the stars', content: 'blah blah blah'},
        {id: 1, title: 'help me find peach', content: 'blah blah blah'},
        {id: 3, title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]

const projectReducer = (state=initState, action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
            return [action.project, ...state]
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