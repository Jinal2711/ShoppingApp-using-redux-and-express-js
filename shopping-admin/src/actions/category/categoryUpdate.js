
import { fetchCategoryPending, fetchCategoryError } from "./categoryAction";
import { CATEGORY_UPDATE_DATA } from '../../constant';

export const updateCategory = (status) => {
  return {
    type: CATEGORY_UPDATE_DATA,
    status,
  }
}

const updateCategoryEdit = (id, payload) => {
  return dispatch => {
    dispatch(fetchCategoryPending());
    fetch(`http://localhost:3000/category/update/${id}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.error) {
          throw (data.error)
        }
        dispatch(updateCategory(data.status));
      })
      .catch(error => {
        dispatch(fetchCategoryError(error));
      })
  }
}

export default updateCategoryEdit;