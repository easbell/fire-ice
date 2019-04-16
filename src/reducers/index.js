import { combineReducers } from 'redux';
import houseReducer from './houseReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  houses: houseReducer,
  error: errorReducer,
  loading: loadingReducer
})

export default rootReducer;