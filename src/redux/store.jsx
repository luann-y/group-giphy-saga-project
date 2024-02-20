import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// mpn i redux-saga and middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
//axios
import axios from 'axios';

// REDUCERS (redux)

// SAGA
const sagaMiddleware = createSagaMiddleware();

// SAGA Generator Functions
function* searchGifsSaga(action) {
  // try catch block
  try {
    // code to try running HERE
    const searchResult = yield axios.post('/api/categories/search', {
      searchAPI: action.payload.name,
    });
    yield put({ type: 'SET_IMAGES', payload: searchResult.data });
  } catch (error) {
    // error happens in try black get sent HERE
    console.log('ERROR:', error);
  }
}

// SAGA function [generator function]
function* watcherSaga() {
  // yield
  yield takeEvery('SEARCH_GIPHY', searchGifsSaga);
}

// This is creating the store
// the store is the big JavaScript Object that holds all of the information for our application
const store = createStore(
  // This function is our first reducer
  // reducer is a function that runs every time an action is dispatched
  combineReducers({}),
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(watcherSaga);

export default store;
