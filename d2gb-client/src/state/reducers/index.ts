import { combineReducers } from 'redux';
import { BuilderReducer, defaultBuilderState, iBuilderState } from './builder.reducer';


export type iAppState = {
    builderState: iBuilderState;
}

/**
 * Establish the initial state of each area of the application.
 */
export const INITIAL_STATE: iAppState = {
    builderState: defaultBuilderState,
}

/**
 * Combine all of the reducers and export them all as 'reducer'.
 */
export default combineReducers({
    builderState: BuilderReducer,
});
