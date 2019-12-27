import { fetchCategoryPending, fetchCategoryError } from "./categoryAction";
import { CATEGORY_EDIT_DATA } from '../../constant';

export const editCategoryById = (categoryToEdit) => {
  return {
    type: CATEGORY_EDIT_DATA,
    categoryToEdit,
  }
}
const fetchCategoryEdit = (id) => {
  return dispatch => {
    dispatch(fetchCategoryPending());
    fetch(`http://localhost:3000/category/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.error) {
          throw (data.error)
        }
        dispatch(editCategoryById(data));
      })
      .catch(error => {
        dispatch(fetchCategoryError(error));
      })
  }
}
export default fetchCategoryEdit;