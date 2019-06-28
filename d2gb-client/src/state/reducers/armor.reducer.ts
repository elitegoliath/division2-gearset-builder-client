import { List } from 'immutable'
import { Armor } from '../../models/armor.model'
import { iReduxAction } from '../actions'
import * as Actions from '../actions/armor.actions'
import { tFormSelectItem } from '../../constants';

export type iArmorState = {
    armorList: List<Armor>
    armorNameList: List<tFormSelectItem>
}

export const defaultArmorState: iArmorState = {
    armorList: List<Armor>(),
    armorNameList: List<tFormSelectItem>(),
}

const INITIAL_STATE: iArmorState = defaultArmorState

export const ArmorReducer = (_state: iArmorState = INITIAL_STATE, _action: iReduxAction): iArmorState => {
    switch(_action.type) {
        // TODO: Add armor to a list. Also add a list of armor names.
        case Actions.RECEIVED_ARMOR_LIST: {
            console.log('RECEIVED')
            let nameList: List<tFormSelectItem> = List<tFormSelectItem>()
            const aList: List<Armor> = _action.payload
            aList.forEach(a => nameList = nameList.push({
                key: a.model,
                text: a.model,
                value: a.model,
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