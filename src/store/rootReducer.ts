import {combineReducers, Action, AnyAction, current} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// import applicationReducer, {
//   Slice as ApplicationSlice,
// } from './redux/application/reducer';
 

const persistMetaConfig = {
  key: 'meta',
  version: 1, 
  timeout: undefined,
  // https://github.com/rt2zz/redux-persist#state-reconciler
  // https://blog.bam.tech/developer-news/redux-persist-how-it-works-and-how-to-change-the-structure-of-your-persisted-store
  stateReconciler: autoMergeLevel2,
};

const appReducer = combineReducers({
  // [ApplicationSlice.name]: applicationReducer, 
});

// export type RootState = ReturnType<typeof rootReducer>;
const rootReducer = (
  state: ReturnType<typeof appReducer> | undefined,
  action: Action,
) => {
  // if (resetStateAction.match(action)) {
  //   // for all keys defined in your persistConfig(s)
  //   AsyncStorage.removeItem('persist:root');

  //   return appReducer(undefined, action);
  // }
  return appReducer(state, action);
};

export default rootReducer;
