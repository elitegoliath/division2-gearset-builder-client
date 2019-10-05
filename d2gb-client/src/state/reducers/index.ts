import { combineReducers } from 'redux'
import { BuilderReducer, defaultBuilderState, iBuilderState } from './builder.reducer'
import { iImageState, defaultImageState, ImageReducer } from './images.reducer'
// import { firestoreReducer } from 'redux-firestore'
import { tArmorState, defaultArmorState, ArmorReducer } from './armor.reducer'
import { tBrandState, defaultBrandState, BrandReducer } from './brand.reducer'
import { AttributeReducer, defaultAttributeState, tAttributeState } from './attribute.reducer'

export type iAppState = {
    builderState: iBuilderState
    imageState: iImageState
    armorState: tArmorState
    brandState: tBrandState
    attributeState: tAttributeState
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
    attributeState: defaultAttributeState,
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
    attributeState: AttributeReducer,
    // firestore: firestoreReducer,
})
