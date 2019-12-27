import { FETCH_PRODUCT_PENDING, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_ERROR } from '../constant';

const initialState = {
  pending: false,
  product: [],
  error: null
}

const productReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case FETCH_PRODUCT_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        pending: false
      }
    case FETCH_PRODUCT_ERROR:
      return {
        ...state,
        error: action.erro,
        pending: false
      }
    default: return state;
  }
}

export default productReducer;