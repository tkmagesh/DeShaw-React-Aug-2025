import {applyMiddleware, combineReducers, createStore} from 'redux';
import bugsReducer from '../bugs/reducers/bugs-reducer';
import projectsReducer from "../projects/reducers/projects-reducer";
import {thunk} from 'redux-thunk'

const rootReducer = combineReducers({
    bugs : bugsReducer,
    projects : projectsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));



export default store;