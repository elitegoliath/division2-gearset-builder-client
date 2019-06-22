import { Record } from 'immutable'
import { Weapon } from './weapon.model'
import { Armor } from './armor.model'
import { Gadget } from './gadget.model'
import Constants from '../constants';

export type tGearSet = {
    primaryWeapon?: Weapon
    secondaryWeapon?: Weapon
    sidearm?: Weapon
    mask?: Armor
    backpack?: Armor
    chest?: Armor
    gloves?: Armor
    holster?: Armor
    kneepads?: Armor
    firstGadget?: Gadget
    secondGadget?: Gadget
    // setStats?: TODO: Make a stats model.
};

const DefaultGearSet = Record<tGearSet>({
    primaryWeapon: new Weapon(),
    secondaryWeapon: new Weapon(),
    sidearm: new Weapon(),
    mask: new Armor({iconURL: Constants.ICON_GEAR_MASK}),
    backpack: new Armor({iconURL: Constants.ICON_GEAR_BACKPACK}),
    chest: new Armor({iconURL: Constants.ICON_GEAR_CHEST}),
    gloves: new Armor({iconURL: Constants.ICON_GEAR_GLOVES}),
    holster: new Armor({iconURL: Constants.ICON_GEAR_HOLSTER}),
    kneepads: new Armor({iconURL: Constants.ICON_GEAR_KNEEPADS}),
    firstGadget: new Gadget(),
    secondGadget: new Gadget(),
}, 'Gear Set Model')

export class GearSet extends DefaultGearSet implements tGearSet {
    constructor (_params?: tGearSet) {
        if (_params) {
            super(_params)
        } else {
            super()
        }
    }

    // public with(_params: tGearSet) {
    //     return this.merge(_params) as this;
    // }
}
