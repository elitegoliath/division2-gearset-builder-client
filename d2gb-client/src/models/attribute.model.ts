import { Record } from 'immutable'
import Constants, { eAttributeType, tModifier } from '../constants'

export type tAttribute = {
    type?: eAttributeType
    iconURL?: string
    modifier?: tModifier
}

const DefaultAttribute = Record<tAttribute>({
    type: null,
    iconURL: Constants.ICON_GEAR_DEFAULT,
    modifier: null,
}, 'Attribute Model')

export class Attribute extends DefaultAttribute implements tAttribute {
    constructor(_params?: tAttribute) {
        if (_params) {
            super(_params)
        } else {
            super()
        }
    }

    public with(_params: tAttribute) {
        return this.merge(_params) as this;
    }
}