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
    primaryWeapon: new Weapon({gearSlot: 'primaryWeapon'}),
    secondaryWeapon: new Weapon({gearSlot: 'secondaryWeapon'}),
    sidearm: new Weapon({gearSlot: 'sidearm'}),
    mask: new Armor({iconURL: Constants.ICON_GEAR_MASK, gearSlot: 'mask'}),
    backpack: new Armor({iconURL: Constants.ICON_GEAR_BACKPACK, gearSlot: 'backpack'}),
    chest: new Armor({iconURL: Constants.ICON_GEAR_CHEST, gearSlot: 'chest'}),
    gloves: new Armor({iconURL: Constants.ICON_GEAR_GLOVES, gearSlot: 'gloves'}),
    holster: new Armor({iconURL: Constants.ICON_GEAR_HOLSTER, gearSlot: 'holster'}),
    kneepads: new Armor({iconURL: Constants.ICON_GEAR_KNEEPADS, gearSlot: 'kneepads'}),
    firstGadget: new Gadget({gearSlot: 'firstGadget'}),
    secondGadget: new Gadget({gearSlot: 'secondGadget'}),
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
