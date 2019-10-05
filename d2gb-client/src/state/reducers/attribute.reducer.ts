import { List } from 'immutable'
import { Attribute } from '../../models/attribute.model'
import { iReduxAction } from '../actions'
import * as Actions from '../actions/attribute.actions'

export type tAttributeState = {
    attributeList: List<Attribute>
}

export const defaultAttributeState: tAttributeState = {
    attributeList: List<Attribute>(),
}

const INITIAL_STATE: tAttributeState = defaultAttributeState

export const AttributeReducer = (_state: tAttributeState = INITIAL_STATE, _action: iReduxAction): tAttributeState => {
    switch (_action.type) {
        case Actions.RECEIVED_ATTRIBUTE_LIST:
            return {..._state, attributeList: _action.payload}

        default:
            return _state
    }
}