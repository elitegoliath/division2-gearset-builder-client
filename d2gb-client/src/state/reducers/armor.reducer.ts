import { List } from 'immutable'
import { Armor } from '../../models/armor.model'
import { iReduxAction } from '../actions'
import * as Actions from '../actions/armor.actions'
import { tFormSelectItem } from '../../constants'

export type tArmorState = {
    armorList: List<Armor>
    armorNameList: List<tFormSelectItem>
}

export const defaultArmorState: tArmorState = {
    armorList: List<Armor>(),
    armorNameList: List<tFormSelectItem>(),
}

const INITIAL_STATE: tArmorState = defaultArmorState

export const ArmorReducer = (_state: tArmorState = INITIAL_STATE, _action: iReduxAction): tArmorState => {
    switch(_action.type) {
        // TODO: Add armor to a list. Also add a list of armor names.
        case Actions.RECEIVED_ARMOR_LIST: {
            let nameList: List<tFormSelectItem> = List<tFormSelectItem>()
            const aList: List<Armor> = _action.payload
            aList.forEach(a => nameList = nameList.push({
                key: a.armorName,
                text: a.armorName,
                value: a.armorName,
            }))

            return {
                ..._state,
                armorList: aList,
                armorNameList: nameList,
            }
        }

        default: return _state
    }
}