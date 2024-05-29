
import {
  FETCH_DATA_SUCCESS,
  CREATE_DATA_SUCCESS,
  UPDATE_DATA_SUCCESS,
  DELETE_DATA_SUCCESS,
} from './ActionType';

export const fetchDataSuccess = (payload) => ({
  type: FETCH_DATA_SUCCESS,
  payload,
});

export const createDataSuccess = (payload) => ({
  type: CREATE_DATA_SUCCESS,
  payload,
});

export const updateDataSuccess = (payload) => ({
  type: UPDATE_DATA_SUCCESS,
  payload,
});

export const deleteDataSuccess = (payload) => ({
  type: DELETE_DATA_SUCCESS,
  payload,
});
export const updateData = (formDataWithFile) => {
  return async (dispatch) => {
    const formData = new FormData();
    formData.append('id', formDataWithFile.id);
    formData.append('firstname', formDataWithFile.firstname);
    formData.append('lastname', formDataWithFile.lastname);
    formData.append('email', formDataWithFile.email);
    formData.append('age', formDataWithFile.age);
    formData.append('file', formDataWithFile.file);

    try {
      const response = await axios.post('http://localhost:3001/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      dispatch({ type: UPDATE_DATA_REQUEST, payload: response.data });
    } catch (error) {
      console.error('Error updating data', error);
    }
  };
};