import { Record } from 'immutable'
import { Weapon } from './weapon.model'
import { Armor } from './armor.model'
import { Gadget } from './gadget.model'
import Constants, { eGearSlot } from '../constants';

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
    primaryWeapon: new Weapon({gearSlot: eGearSlot.PrimaryWeapon}),
    secondaryWeapon: new Weapon({gearSlot: eGearSlot.SecondaryWeapon}),
    sidearm: new Weapon({gearSlot: eGearSlot.Sidearm}),
    mask: new Armor({iconURL: Constants.ICON_GEAR_MASK, gearSlot: eGearSlot.Mask}),
    backpack: new Armor({iconURL: Constants.ICON_GEAR_BACKPACK, gearSlot: eGearSlot.Backpack}),
    chest: new Armor({iconURL: Constants.ICON_GEAR_CHEST, gearSlot: eGearSlot.Chest}),
    gloves: new Armor({iconURL: Constants.ICON_GEAR_GLOVES, gearSlot: eGearSlot.Gloves}),
    holster: new Armor({iconURL: Constants.ICON_GEAR_HOLSTER, gearSlot: eGearSlot.Holster}),
    kneepads: new Armor({iconURL: Constants.ICON_GEAR_KNEEPADS, gearSlot: eGearSlot.Kneepads}),
    firstGadget: new Gadget({gearSlot: eGearSlot.FirstGadget}),
    secondGadget: new Gadget({gearSlot: eGearSlot.SecondGadget}),
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
