import {applyMiddleware, combineReducers, createStore} from 'redux'
import UsersReducer from './reducer'
import thunk from 'redux-thunk';

const store = createStore(UsersReducer , applyMiddleware(thunk));

export default store




// const rootReducer = combineReducers(
//     {
//         users:reducer
//     }
// )