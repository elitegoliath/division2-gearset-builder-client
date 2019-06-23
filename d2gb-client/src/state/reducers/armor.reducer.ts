import { List } from 'immutable'
import { Armor } from '../../models/armor.model'
import { iReduxAction } from '../actions'

export type iArmorState = {
    armorList: List<Armor>
}

export const defaultArmorState: iArmorState = {
    armorList: null
}

const INITIAL_STATE: iArmorState = defaultArmorState

export const ArmorReducer = (_state: iArmorState = INITIAL_STATE, _action: iReduxAction): iArmorState => {
    switch(_action.type) {
        
        default: return _state
    }
}