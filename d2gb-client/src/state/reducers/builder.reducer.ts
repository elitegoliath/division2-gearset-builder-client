import { iReduxAction } from '../actions'
import { GearSet } from '../../models/gearSet.model'
import * as Actions from '../actions/builder.actions'
import { tGearSlot } from '../../constants';

/**
 * Builder State interface.
 */
export type iBuilderState = {
    gearSet: GearSet
    isEquipmentEditorOpen: boolean
    equipmentEditorGearSlot: tGearSlot
}

/**
 * Initial state for the builder.
 */
export const defaultBuilderState: iBuilderState = {
    gearSet: new GearSet(),
    isEquipmentEditorOpen: false,
    equipmentEditorGearSlot: null,
}

/**
 * Define the initial state as the default state.
 */
const INITIAL_STATE: iBuilderState = defaultBuilderState

/**
 * Initialize the reducer.
 * 
 * @param state 
 * @param action 
 */
export const BuilderReducer = (_state: iBuilderState = INITIAL_STATE, _action: iReduxAction): iBuilderState => {
    switch (_action.type) {
        case Actions.OPEN_EQUIPMENT_EDITOR: return {
            ..._state,
            isEquipmentEditorOpen: true,
            equipmentEditorGearSlot: _action.payload,
        }

        case Actions.CLOSE_EQUIPMENT_EDITOR: return {
            ..._state,
            isEquipmentEditorOpen: false,
            equipmentEditorGearSlot: null,
        }

        default: return _state
    }
}
