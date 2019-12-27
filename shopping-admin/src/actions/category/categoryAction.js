import { FETCH_CATEGORY_PENDING, FETCH_CATEGORY_SUCCESS, FETCH_CATEGORY_ERROR } from '../../constant';
export const fetchCategoryPending = () => {
  return {
    type: FETCH_CATEGORY_PENDING
  }
}

export const fetchCategorySuccess = (category) => {
  return {
    type: FETCH_CATEGORY_SUCCESS,
    category: category
  }
}
export const fetchCategoryError = (error) => {
  return {
    type: FETCH_CATEGORY_ERROR,
    error: error
  }
}