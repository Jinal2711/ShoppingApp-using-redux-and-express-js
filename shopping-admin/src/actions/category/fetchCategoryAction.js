import { fetchCategoryPending, fetchCategorySuccess, fetchCategoryError } from './categoryAction';

const fetchCategoryData = () => {
  return dispatch => {
    dispatch(fetchCategoryPending());
    fetch(`http://localhost:3000/category`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          throw (data.error)
        }
        dispatch(fetchCategorySuccess(data));
      })
      .catch(error => {
        dispatch(fetchCategoryError(error));
      })
  }
}
export default fetchCategoryData;