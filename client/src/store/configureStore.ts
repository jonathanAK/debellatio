import {combineReducers, createStore, applyMiddleware} from 'redux'
import viewsReducer from "./views.reducer";
import miscReducer from "./misc.reducer";
import gameBoredReducer from "./gameBoard.reducer";
import socketMdl from "./socketMiddleware";
import {composeWithDevTools} from 'redux-devtools-extension';

export default function configureStore() {
    const middlewareEnhancer = applyMiddleware(...socketMdl);
    const composedEnhancers = composeWithDevTools(middlewareEnhancer);
    // combine all reducers to create  root reducer
    const rootReducer = combineReducers({
        views:viewsReducer,
        misc:miscReducer,
        board:gameBoredReducer
    });
    return createStore(rootReducer,{},composedEnhancers);
};