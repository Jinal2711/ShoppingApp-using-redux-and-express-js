import { fetchCategoryPending, fetchCategoryError } from "../category/categoryAction";
import { CATEGORY_ADD_DATA } from '../../constant';

export const addCategory = (status) => {
  return {
    type: CATEGORY_ADD_DATA,
    status,
  }
}

const categoryAdd = (payload) => {
  return dispatch => {
    dispatch(fetchCategoryPending());
    fetch(`http://localhost:3000/category`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          throw (data.error)
        }
        dispatch(addCategory(data.status));
        //dispatch(fetchCategorySuccess());
      })
      .catch(error => {
        dispatch(fetchCategoryError(error));
      })
  }
}
export default categoryAdd;