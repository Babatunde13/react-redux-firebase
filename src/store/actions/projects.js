import { put, takeLatest, all } from 'redux-saga/effects'

function* addProjectAsync(project) {
    try {
        // update state
        yield put({
            type: 'ADD_PROJECT_ASYNC',
            project
        })
    } catch (error) {
        console.log(error.message)
    }
}

export function* addProject (project) {
    yield takeLatest('ADD_PROJECT', addProjectAsync(project))
}

// function* getProjectsAsync(projects) {
//     console.log(projects)
//     try {
//         // update state
//         yield put({
//             type: 'GET_PROJECTS_ASYNC',
//             projects
//         })
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// export function* getProjects(projects) {
//     yield takeEvery('GET_PROJECTS', getProjectsAsync(projects))
// }

function* deleteProjectAsync(project) {
    // update state
    yield put({
        type: 'DELETE_PROJECT_ASYNC',
        project
    })
}

function* deleteProject (project) {
    yield takeLatest('DELETE_PROJECT', deleteProjectAsync(project))
}

export default function* rootSaga() {
  yield all([
    addProject,
    // getProjects,
    deleteProject
  ])
}
