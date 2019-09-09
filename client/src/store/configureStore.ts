import {combineReducers, createStore} from 'redux'
import viewsReducer from "./views.reducer";

export default function configureStore() {
    // combine all reducers to create  root reducer
    const rootReducer = combineReducers({
        views:viewsReducer
    });
    return createStore(rootReducer);
}