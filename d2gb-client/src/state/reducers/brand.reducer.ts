import { iReduxAction } from '../actions'
import { Brand } from '../../models/brand.model'
import { List } from 'immutable'
import * as Actions from '../actions/brand.actions'
import { tFormSelectItem } from '../../constants'

export type tBrandState = {
    brandList: List<Brand>
    brandNameList: List<tFormSelectItem>
}

export const defaultBrandState: tBrandState = {
    brandList: List<Brand>(),
    brandNameList: List<tFormSelectItem>(),
}

const INITIAL_STATE: tBrandState = defaultBrandState

export const BrandReducer = (_state: tBrandState = INITIAL_STATE, _action: iReduxAction): tBrandState => {
    switch (_action.type) {
        case Actions.RECEIVED_BRAND_LIST: {
            let nameList: List<tFormSelectItem> = List<tFormSelectItem>()
            const bList: List<Brand> = _action.payload
            bList.forEach(b => {
                nameList = nameList.push({
                    key: b.name,
                    text: b.name,
                    value: b.name,
                })
            })

            return {
                ..._state,
                brandList: bList,
                brandNameList: nameList,
            }
        }

        default:
            return _state
    }
}