import {createReactNavigationReduxMiddleware} from "react-navigation-redux-helpers";
import {createStore,applyMiddleware} from 'redux';
import app from '../Reducers'
import thunk from "redux-thunk";
export const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

export const store = createStore(app,applyMiddleware(thunk,middleware))