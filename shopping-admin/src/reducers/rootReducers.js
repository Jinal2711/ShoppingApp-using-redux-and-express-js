import {
  combineReducers
} from 'redux'
import categoryReducers from './categoryReducers';
import productReducer from './productReducer';
export default combineReducers({
  categoryReducers,
  productReducer
})