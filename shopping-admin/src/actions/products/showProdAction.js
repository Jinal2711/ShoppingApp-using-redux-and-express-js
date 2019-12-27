import { FETCH_PRODUCT_PENDING, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_ERROR } from '../../constant';

export const fetchProductPending = () => {
  return {
    type: FETCH_PRODUCT_PENDING
  }
}
export const fetchProductSuccess = product => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product
  }
}
export const fetchProductError = error => {
  return {
    type: FETCH_PRODUCT_ERROR,
    error: error
  }
}