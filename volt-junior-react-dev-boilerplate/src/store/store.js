import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import customers from './reducers/customersReducers';
import products from './reducers/productsReducers';

let console = window.console;

const loggerMiddleware = createLogger();

const saver = store => next => action => {
    let result = next(action);
    localStorage["redux-store"] = JSON.stringify(store.getState());
    return result;
};

const middleware = () => [
    thunk,
    loggerMiddleware,
    saver,
]

const storeFactory = (initialState = {}) => {
    const store = applyMiddleware(...middleware())(createStore)(combineReducers({ customers, products }), initialState);
    return store
}

export default storeFactory;