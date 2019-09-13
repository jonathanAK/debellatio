import {combineReducers, createStore} from 'redux'
import viewsReducer from "./views.reducer";
import miscReducer from "./misc.reducer";


export default function configureStore() {
    // combine all reducers to create  root reducer
    const rootReducer = combineReducers({
        views:viewsReducer,
        misc:miscReducer
    });
    return createStore(rootReducer);
};