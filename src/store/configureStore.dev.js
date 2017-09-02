import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import allReducers from '../reducers';
import clients from '../api/clients';
import { multiClientMiddleware } from 'redux-axios-middleware';

export default function configureStore(preloadedState) {
  const logger = createLogger({ collapsed: true });

  const api = multiClientMiddleware(clients);

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    allReducers,
    preloadedState,
    composeEnhancers(applyMiddleware(api, thunk, promise, logger)),
  );

  clients.default.client.interceptors.response.use(
    response => {
      //Handle response before its returned to its caller
      return response;
    },
    error => {
      //on error maybe we will need to catch 401 header response and logout user or do some other staff for error handling
      //now it does nothing :)
      return Promise.reject(error);
    },
  );

  return store;
}
