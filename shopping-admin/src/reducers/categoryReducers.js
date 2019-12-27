import {
  FETCH_CATEGORY_PENDING,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORY_DELETE_SUCCESS,
  CATEGORY_ADD_DATA,
  CATEGORY_EDIT_DATA
} from '../constant';

const initialState = {
  pending: false,
  category: [],
  error: null,
  msg: '',
  categoryToEdit: null
}
const categoryReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        pending: false,
        category: action.category
      }
    case FETCH_CATEGORY_DELETE_SUCCESS:
      const remainingCategories = state.category.filter(cat => cat.category_id !== action.category);
      return {
        ...state,
        pending: false,
        category: remainingCategories,
        msg: action.msg
      }
    case FETCH_CATEGORY_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    case CATEGORY_ADD_DATA:
      return {
        ...state,
        pending: true,
        error: action.error
      }
    case CATEGORY_EDIT_DATA:
      return {
        ...state,
        categoryToEdit: action.categoryToEdit,
        pending: false,
        error: action.error
      }
    default:
      return state;
  }
}
export default categoryReducers;