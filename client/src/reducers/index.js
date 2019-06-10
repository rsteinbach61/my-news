import { combineReducers } from 'redux';
import manageSports from './manageSports'

const rootReducer = combineReducers({
  sports: manageSports
})

export default rootReducer
