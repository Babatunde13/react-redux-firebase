import {combineReducers} from 'redux'
import auth from './authReducer'
import projects from './projectReducer'

const rootReducer = combineReducers({
  auth,
  projects
});

export default rootReducer;
