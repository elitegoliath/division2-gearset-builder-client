import { combineReducers } from 'redux'
import { BuilderReducer, defaultBuilderState, iBuilderState } from './builder.reducer'
import { iImageState, defaultImageState, ImageReducer } from './images.reducer'
// import { firestoreReducer } from 'redux-firestore'
import { iArmorState, defaultArmorState, ArmorReducer } from './armor.reducer'
import { iBrandState, defaultBrandState, BrandReducer } from './brand.reducer'


export type iAppState = {
    builderState: iBuilderState
    imageState: iImageState
    armorState: iArmorState
    brandState: iBrandState
    // firestore: any
}

/**
 * Establish the initial state of each area of the application.
 */
export const INITIAL_STATE: iAppState = {
    builderState: defaultBuilderState,
    imageState: defaultImageState,
    armorState: defaultArmorState,
    brandState: defaultBrandState,
    // firestore: null,
}

/**
 * Combine all of the reducers and export them all as 'reducer'.
 */
export default combineReducers({
    builderState: BuilderReducer,
    imageState: ImageReducer,
    armorState: ArmorReducer,
    brandState: BrandReducer,
    // firestore: firestoreReducer,
})
