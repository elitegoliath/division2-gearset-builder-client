import { iReduxAction } from '../actions'
import { Brand } from '../../models/brand.model'
import { List } from 'immutable'
import * as Actions from '../actions/brand.actions'

export type iBrandState = {
    brandList: List<Brand>
}

export const defaultBrandState: iBrandState = {
    brandList: List<Brand>(),
}

const INITIAL_STATE: iBrandState = defaultBrandState

export const BrandReducer = (_state: iBrandState = INITIAL_STATE, _action: iReduxAction): iBrandState => {
    switch(_action.type) {
        case Actions.RECIEVED_BRAND_LIST: return {..._state, brandList: _action.payload}
        
        default: return _state
    }
}