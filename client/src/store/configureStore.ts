import {combineReducers, createStore} from 'redux'
// import territoriesDataReducer from './territoriesDataReducer';

export default function configureStore() {
    // combine all reducers to create  root reducer
    const rootReducer = combineReducers({
        // territories:territoriesDataReducer
    });
    return createStore(rootReducer);
}