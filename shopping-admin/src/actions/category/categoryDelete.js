import { fetchCategoryPending, fetchCategoryError } from "./categoryAction";
import { FETCH_CATEGORY_DELETE_SUCCESS } from '../../constant';

export const fetchCategoryDeleteSuccess = (id, msg) => {
  return {
    type: FETCH_CATEGORY_DELETE_SUCCESS,
    category: id,
    msg
  }
}
const categoryDelete = (id) => {
  return dispatch => {
    dispatch(fetchCategoryPending());
    fetch(`http://localhost:3000/category/delete/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          throw (data.error)
        }
        dispatch(fetchCategoryDeleteSuccess(id, data.msg));
      })
      .catch(error => {
        dispatch(fetchCategoryError(error));
      })
  }
}
export default categoryDelete;