import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from './DevTools';

const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(
        thunkMiddleware,
    ),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
  );


export const store = createStore(rootReducer, enhancer)