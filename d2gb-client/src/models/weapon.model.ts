import { Record, List } from 'immutable'
import Constants, { eWeaponType, tPerk, eEquipmentCategory, eGearSlot } from '../constants'
import { Talent } from './talent.model'
import { WeaponMod } from './weaponMod.model'

export type tWeapon = {
    gearSlot?: eGearSlot
    model?: string
    type?: eWeaponType
    perk?: tPerk
    accuracy?: number
    stability?: number
    reloadTime?: number
    critStrikeRangeMin?: number
    critStrikeRangeMax?: number
    damageDropOff?: number
    talents?: List<Talent>
    mods?: List<WeaponMod>
    iconURL?: string
    readonly category?: eEquipmentCategory
};

const DefaultWeapon = Record<tWeapon>({
    category: eEquipmentCategory.Weapon,
    iconURL: Constants.ICON_GEAR_DEFAULT,
    model: null,
    type: null,
}, 'Weapon Model');

export class Weapon extends DefaultWeapon implements tWeapon {
    constructor(_params?: tWeapon) {
        if (_params) {
            super(_params);
        } else {
            super();
        }
    }
}