import { iReduxAction } from '../actions';
import { GearSet } from '../../models/gearSet.model';

/**
 * Builder State interface.
 */
export type iBuilderState = {
    gearSet: GearSet;
}

/**
 * Initial state for the builder.
 */
export const defaultBuilderState: iBuilderState = {
    gearSet: new GearSet(),
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
