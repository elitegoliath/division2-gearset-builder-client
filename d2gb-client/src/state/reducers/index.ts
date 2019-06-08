import { combineReducers } from 'redux';
import { BuilderReducer, defaultBuilderState, iBuilderState } from './builder.reducer';
import { iImageState, defaultImageState, ImageReducer } from './image.reducer';


export type iAppState = {
    builderState: iBuilderState;
    imageState: iImageState;
}

/**
 * Establish the initial state of each area of the application.
 */
export const INITIAL_STATE: iAppState = {
    builderState: defaultBuilderState,
    imageState: defaultImageState,
}

/**
 * Combine all of the reducers and export them all as 'reducer'.
 */
export default combineReducers({
    builderState: BuilderReducer,
    imageState: ImageReducer,
});
