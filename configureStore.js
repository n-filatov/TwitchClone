import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/reducers'

const loggerMiddleware = createLogger();

export default function configureStore(preloadedStore) {
  return createStore(
    rootReducer,
    preloadedStore,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
}