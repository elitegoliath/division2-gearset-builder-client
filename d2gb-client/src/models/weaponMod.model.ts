import { Record, List } from 'immutable';
import { tModifier } from '../constants';

export type tWeaponMod = {
    name?: string;
    // slot?: TODO: make an enum for weapon mod slots.
    iconURL?: string;
    description?: string;
    modifiers?: List<tModifier>;
};

const DefaultWeaponMod = Record<tWeaponMod>({

}, 'Weapon Mod Model');

export class WeaponMod extends DefaultWeaponMod implements tWeaponMod {

}