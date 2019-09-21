import {combineReducers, createStore, applyMiddleware} from 'redux'
import viewsReducer from "./views.reducer";
import miscReducer from "./misc.reducer";
import gameBoredReducer from "./gameBoard.reducer";
import socketMdl from "./socketMiddleware";

export default function configureStore() {
    const middlewareEnhancer = applyMiddleware(...socketMdl);
    // combine all reducers to create  root reducer
    const rootReducer = combineReducers({
        views:viewsReducer,
        misc:miscReducer,
        board:gameBoredReducer
    });
    return createStore(rootReducer,{},middlewareEnhancer);
};