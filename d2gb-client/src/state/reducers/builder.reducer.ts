import { iReduxAction } from '../actions'
import { GearSet } from '../../models/gearSet.model'
import * as Actions from '../actions/builder.actions'
import { Armor } from '../../models/armor.model'
import { Weapon } from '../../models/weapon.model'
import { Gadget } from '../../models/gadget.model'

/**
 * Builder State interface.
 */
export type iBuilderState = {
    gearSet: GearSet
    isEquipmentEditorOpen: boolean
    equipmentEditorModel: Armor | Weapon | Gadget
}

/**
 * Initial state for the builder.
 */
export const defaultBuilderState: iBuilderState = {
    gearSet: new GearSet(),
    isEquipmentEditorOpen: false,
    equipmentEditorModel: null,
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
            equipmentEditorModel: _action.payload,
        }

        case Actions.CLOSE_EQUIPMENT_EDITOR: return {
            ..._state,
            isEquipmentEditorOpen: false,
            equipmentEditorModel: null,
        }

        default: return _state
    }
}
