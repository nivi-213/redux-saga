// src/saga/Store.js
import { all } from 'redux-saga/effects';
import watchItemSagas from './itemSaga';

export default function* rootSaga() {
  yield all([
    watchItemSagas()
  ]);
}
