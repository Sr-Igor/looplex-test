//Create Store
import { configureStore } from '@reduxjs/toolkit';
import { Store, AnyAction } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

//Persistor

//Modules Configs
import { persistConfig } from './modules/rootPersistors';
import rootReducer from './modules/rootReducers';
import rootSaga from './modules/rootSagas';

//--------------------------------------Configure Store--------------------------------------//

//Persistor Module
const persistedReducer = persistReducer(persistConfig, rootReducer);

//Create Saga
const sagaMiddleware = createSagaMiddleware();

//Default Store
const store: Store<unknown, AnyAction> = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(sagaMiddleware)
});

//Default Persistor
const persistor = persistStore(store);

//Run Sagas
sagaMiddleware.run(rootSaga);

//----------------------------------------- Exports ----------------------------------------//
export { store, persistor };
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
