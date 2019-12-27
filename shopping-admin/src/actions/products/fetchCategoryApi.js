import { fetchProductPending, fetchProductSuccess, fetchProductError } from './showProdAction';

const fetchProductData = () => {
  return dispatch => {
    dispatch(fetchProductPending());
    fetch(`http://localhost:3000/products`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.error) {
          throw (data.error)
        }
        dispatch(fetchProductSuccess(data));
      })
      .catch(error => {
        dispatch(fetchProductError(error));
      })
  }
}

export default fetchProductData;