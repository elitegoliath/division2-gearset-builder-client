import { Record, List } from 'immutable'
import Constants, { eWeaponType, tPerk, eEquipmentCategory, eGearSlot, tGearSlot } from '../constants'
import { Talent } from './talent.model'
import { WeaponMod } from './weaponMod.model'

export type tWeapon = {
    gearSlot?: tGearSlot
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
    gearSlot: null,
    model: null,
    type: null,
    perk: null,
    accuracy: 0,
    stability: 0,
    reloadTime: 0,
    critStrikeRangeMin: 0,
    critStrikeRangeMax: 0,
    damageDropOff: 0,
    talents: null,
    mods: null,
    iconURL: Constants.ICON_GEAR_DEFAULT,
    category: eEquipmentCategory.Weapon,
}, 'Weapon Model');

export class Weapon extends DefaultWeapon implements tWeapon {
    constructor(_params?: tWeapon) {
        if (_params) {
            super(_params)
        } else {
            super()
        }
    }
}