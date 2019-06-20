import { Record } from 'immutable';
import { Weapon } from './weapon.model';
import { Armor } from './armor.model';
import { Gadget } from './gadget.model';

export type tGearSet = {
    primaryWeapon?: Weapon;
    secondaryWeapon?: Weapon;
    sidearm?: Weapon;
    mask?: Armor;
    backpack?: Armor;
    chest?: Armor;
    gloves?: Armor;
    holster?: Armor;
    kneepads?: Armor;
    firstGadget?: Gadget;
    secondGadget?: Gadget;
    // setStats?: TODO: Make a stats model.
};

const DefaultGearSet = Record<tGearSet>({
    primaryWeapon: new Weapon(),
    secondaryWeapon: new Weapon(),
    sidearm: new Weapon(),
    mask: new Armor(),
    backpack: new Armor(),
    chest: new Armor(),
    gloves: new Armor(),
    holster: new Armor(),
    kneepads: new Armor(),
    firstGadget: new Gadget(),
    secondGadget: new Gadget(),
}, 'Gear Set Model');

export class GearSet extends DefaultGearSet implements tGearSet {

    constructor (_params?: tGearSet) {
        if (_params) {
            super(_params);
        } else {
            super();
        }
    }

    // public with(_params: tGearSet) {
    //     return this.merge(_params) as this;
    // }
}
