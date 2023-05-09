import {createStore} from 'redux'
import UserReducer from './reducer'

const storeUser = createStore(UserReducer);

export default storeUser