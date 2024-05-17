
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
