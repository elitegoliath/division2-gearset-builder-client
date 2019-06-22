import { Record, List } from 'immutable'
import Constants, { eArmorType, tBrand, tAttribute, eEquipmentCategory } from '../constants'
import { Talent } from './talent.model'
import { ArmorMod } from './armorMod.model'

export type tArmor = {
    model?: string
    type?: eArmorType
    description?: string
    brand?: tBrand
    attributes?: List<tAttribute>
    talents?: List<Talent>
    mods?: List<ArmorMod>
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