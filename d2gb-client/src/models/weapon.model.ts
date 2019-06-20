import { Record, List } from 'immutable';
import { eWeaponType, tPerk, tEquipmentItem, eEquipmentCategory } from '../constants';
import { Talent } from './talent.model';
import { WeaponMod } from './weaponMod.model';

export type tWeapon = {
    model?: string,
    type?: eWeaponType,
    perk?: tPerk,
    accuracy?: number,
    stability?: number,
    reloadTime?: number,
    critStrikeRangeMin?: number,
    critStrikeRangeMax?: number,
    damageDropOff?: number,
    talents?: List<Talent>,
    mods?: List<WeaponMod>,
};

const DefaultWeapon = Record<tWeapon>({

}, 'Weapon Model');

export class Weapon extends DefaultWeapon implements tWeapon, tEquipmentItem {
    public readonly category: eEquipmentCategory = eEquipmentCategory.Weapon;
    public readonly iconURL: string = '';
}