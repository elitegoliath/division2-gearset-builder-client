import { Record, List } from 'immutable'
import Constants, { eArmorType, tBrand, tAttribute, eEquipmentCategory, eArmorModSlotType, eGearSlot } from '../constants'
import { Talent } from './talent.model'
import { ArmorMod } from './armorMod.model'

export type tArmor = {
    gearSlot?: eGearSlot
    model?: string
    type?: eArmorType
    baseArmor?: number
    brand?: tBrand
    attributeLimit?: number
    possibleAttributes?: List<tAttribute>
    talentLimit?: number
    possibleTalents?: List<Talent>
    modSlotLimit?: number
    possibleModSlotTypes?: List<eArmorModSlotType>
    iconURL?: string
    readonly category?: eEquipmentCategory
};

const DefaultArmor = Record<tArmor>({
    category: eEquipmentCategory.Armor,
    iconURL: Constants.ICON_GEAR_DEFAULT,
}, 'Armor Model')

export class Armor extends DefaultArmor implements tArmor {
    constructor(_params?: tArmor) {
        if (_params) {
            super(_params);
        } else {
            super();
        }
    }
}