import { combineReducers } from 'redux'
import { BuilderReducer, defaultBuilderState, iBuilderState } from './builder.reducer'
import { iImageState, defaultImageState, ImageReducer } from './images.reducer'
import { firestoreReducer } from 'redux-firestore'


export type iAppState = {
    builderState: iBuilderState
    imageState: iImageState
    firestore: any
}

/**
 * Establish the initial state of each area of the application.
 */
export const INITIAL_STATE: iAppState = {
    builderState: defaultBuilderState,
    imageState: defaultImageState,
    firestore: null,
}

/**
 * Combine all of the reducers and export them all as 'reducer'.
 */
export default combineReducers({
    builderState: BuilderReducer,
    imageState: ImageReducer,
    firestore: firestoreReducer,
})
