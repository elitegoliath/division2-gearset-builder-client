import { Record } from 'immutable';
import { EquipmentItem, eEquipmentCategory, eArmorType } from './equipment.model';

export type tGearSet = {
    primaryWeapon?: EquipmentItem;
    secondaryWeapon?: EquipmentItem;
    sidearm?: EquipmentItem;
    mask?: EquipmentItem;
    backpack?: EquipmentItem;
    chest?: EquipmentItem;
    gloves?: EquipmentItem;
    holster?: EquipmentItem;
    kneepads?: EquipmentItem;
    firstGadget?: EquipmentItem;
    secondGadget?: EquipmentItem;
};

const DefaultGearSet = Record<tGearSet>({
    primaryWeapon: new EquipmentItem({ category: eEquipmentCategory.Weapon }),
    secondaryWeapon: new EquipmentItem({ category: eEquipmentCategory.Weapon }),
    sidearm: new EquipmentItem({ category: eEquipmentCategory.Weapon }),
    mask: new EquipmentItem({ category: eEquipmentCategory.Armor, type: eArmorType.Mask }),
    backpack: new EquipmentItem({ category: eEquipmentCategory.Armor }),
    chest: new EquipmentItem({ category: eEquipmentCategory.Armor }),
    gloves: new EquipmentItem({ category: eEquipmentCategory.Armor }),
    holster: new EquipmentItem({ category: eEquipmentCategory.Armor }),
    kneepads: new EquipmentItem({ category: eEquipmentCategory.Armor }),
    firstGadget: new EquipmentItem({ category: eEquipmentCategory.Gadget }),
    secondGadget: new EquipmentItem({ category: eEquipmentCategory.Gadget }),
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
