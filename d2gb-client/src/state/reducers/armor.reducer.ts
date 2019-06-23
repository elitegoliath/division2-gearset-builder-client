import { List } from 'immutable'
import { Armor } from '../../models/armor.model'
import { iReduxAction } from '../actions'
import * as Actions from '../actions/armor.actions'

export type iArmorState = {
    armorList: List<Armor>
    armorNameList: string[]
}

export const defaultArmorState: iArmorState = {
    armorList: null,
    armorNameList: null
}

const INITIAL_STATE: iArmorState = defaultArmorState

export const ArmorReducer = (_state: iArmorState = INITIAL_STATE, _action: iReduxAction): iArmorState => {
    switch(_action.type) {
        // TODO: Add armor to a list. Also add a list of armor names.
        case 
        default: return _state
    }
}