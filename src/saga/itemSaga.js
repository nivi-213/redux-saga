
import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  CREATE_DATA_REQUEST,
  CREATE_DATA_SUCCESS,
  CREATE_DATA_FAILURE,
  UPDATE_DATA_REQUEST,
  UPDATE_DATA_SUCCESS,
  UPDATE_DATA_FAILURE,
  DELETE_DATA_REQUEST,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_FAILURE,
} from '../Reducer/ActionType';

const apiUrl = 'https://651289a1b8c6ce52b395c5fb.mockapi.io/saga';

function* fetchDataSaga() {
  try {
    const response = yield call(axios.get, apiUrl);
    yield put({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_DATA_FAILURE, error: error.message });
  }
}

function* createDataSaga(action) {
  try {
    const response = yield call(axios.post, apiUrl, action.payload);
    yield put({ type: CREATE_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: CREATE_DATA_FAILURE, error: error.message });
  }
}

function* updateDataSaga(action) {
  try {
    const response = yield call(axios.put, `${apiUrl}/${action.payload.id}`, action.payload);
    yield put({ type: UPDATE_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: UPDATE_DATA_FAILURE, error: error.message });
  }
}

function* deleteDataSaga(action) {
  try {
    yield call(axios.delete, `${apiUrl}/${action.payload}`);
    yield put({ type: DELETE_DATA_SUCCESS, payload: action.payload });
  } catch (error) {
    yield put({ type: DELETE_DATA_FAILURE, error: error.message });
  }
}

function* watchItemSagas() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
  yield takeLatest(CREATE_DATA_REQUEST, createDataSaga);
  yield takeLatest(UPDATE_DATA_REQUEST, updateDataSaga);
  yield takeLatest(DELETE_DATA_REQUEST, deleteDataSaga);
}

export default watchItemSagas;
