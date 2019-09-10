import {combineReducers, createStore, applyMiddleware} from 'redux'
import viewsReducer from "./views.reducer";
import socketMiddleware from "./socketMiddleware";

export default function configureStore() {
    // combine all reducers to create  root reducer
    const rootReducer = combineReducers({
        views:viewsReducer
    });
    return createStore(rootReducer,applyMiddleware(socketMiddleware()));
}