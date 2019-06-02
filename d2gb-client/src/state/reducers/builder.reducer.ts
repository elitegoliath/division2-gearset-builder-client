import { iReduxAction } from '../actions';

/**
 * Builder State interface.
 */
export type iBuilderState = {

}

/**
 * Default settings for the builder state.
 */
export const defaultBuilderState: iBuilderState = {

}

/**
 * Define the initial state as the default state.
 */
const INITIAL_STATE: iBuilderState = defaultBuilderState;

/**
 * Initialize the reducer.
 * 
 * @param state 
 * @param action 
 */
export const BuilderReducer = (state: iBuilderState = INITIAL_STATE, action: iReduxAction): iBuilderState => {
    switch (action.type) {
        // case Actions.CHANGE_TRACKER: return {...state, ...action.payload};
        default: return state
    }
}
