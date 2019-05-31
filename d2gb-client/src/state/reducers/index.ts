import { combineReducers } from 'redux';
import { BuilderReducer, defaultBuilderState } from './builder.reducer';

/**
 * Establish the initial state of each area of the application.
 */
export const INITIAL_STATE = {
    builder: defaultBuilderState,
}

/**
 * Combine all of the reducers and export them all as 'reducer'.
 */
export default combineReducers({
    builder: BuilderReducer,
});
