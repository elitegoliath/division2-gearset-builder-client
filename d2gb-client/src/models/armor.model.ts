import { Record, List } from 'immutable'
import Constants, { tAttribute, eEquipmentCategory, eArmorModSlotType, tGearSlot } from '../constants'
import { Talent } from './talent.model'
import { Brand } from './brand.model'

export type tArmor = {
    gearSlot?: tGearSlot
    armorName?: string
    type?: number
    baseArmor?: number
    brand?: Brand
    attributeLimit?: number
    possibleAttributes?: List<tAttribute>
    talentLimit?: number
    possibleTalents?: List<Talent>
    modSlotLimit?: number
    possibleModSlotTypes?: List<eArmorModSlotType>
    iconURL?: string
    readonly category?: eEquipmentCategory
}

const DefaultArmor = Record<tArmor>({
    gearSlot: null,
    armorName: null,
    type: null,
    baseArmor: 0,
    brand: null,
    attributeLimit: 0,
    possibleAttributes: null,
    modSlotLimit: 0,
    possibleModSlotTypes: null,
    iconURL: Constants.ICON_GEAR_DEFAULT,
    category: eEquipmentCategory.Armor,
}, 'Armor Model')

export class Armor extends DefaultArmor implements tArmor {
    constructor(_params?: tArmor) {
        if (_params) {
            super(_params)
        } else {
            super()
        }
    }
}