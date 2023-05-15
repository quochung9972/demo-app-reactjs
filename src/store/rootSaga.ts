import {all} from 'redux-saga/effects';
// import applicationSaga from './redux/application/saga'; 

export default function* rootSaga() {
  yield all([
    // applicationSaga(), 
  ]);
}
