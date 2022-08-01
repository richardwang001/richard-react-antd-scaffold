/**
 *@desc
 *@author Richard Wang
 *@date 2022/7/25 13:31
 */

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
});

let persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch