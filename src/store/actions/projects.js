import { put, takeLatest, all } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* addProjectAsync(project) {
    // add to dB
   yield delay(1000);
    // update state
    yield put({
        type: 'ADD_PROJECT_ASYNC',
        project
    })
}

export function* addProject (project) {
    console.log(project)
    yield takeLatest('ADD_PROJECT', addProjectAsync(project))
}

function* deleteProjectAsync(project) {
    // add to dB
//    yield delay(1000);
    // update state
    yield put({
        type: 'DELETE_PROJECT_ASYNC',
        project
    })
}

function* deleteProject (project) {
    console.log(project)
    yield takeLatest('DELETE_PROJECT', deleteProjectAsync(project))
}

export default function* rootSaga() {
  yield all([
    addProject,
    deleteProject
  ])
}