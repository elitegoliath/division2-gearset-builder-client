import Constants, { tModifier } from '../constants'
import { Record } from 'immutable'

export type tBrand = {
    name?: string
    iconURL?: string
    firstModifier?: tModifier
    secondModifier?: tModifier
    thirdModifier?: tModifier
}

const DefaultBrand = Record<tBrand>({
    name: '',
    iconURL: Constants.ICON_GEAR_DEFAULT,
    firstModifier: null,
    secondModifier: null,
    thirdModifier: null,
})

export class Brand extends DefaultBrand implements tBrand {
    constructor(_params?: tBrand) {
        if (_params) {
            super(_params)
        } else {
            super()
        }
    }
}