import { Record } from 'immutable';
import { EquipmentItem, eEquipmentCategory, eArmorType, eGadgetType } from './equipment.model';

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
    backpack: new EquipmentItem({ category: eEquipmentCategory.Armor, type: eArmorType.Backpack }),
    chest: new EquipmentItem({ category: eEquipmentCategory.Armor, type: eArmorType.Chest }),
    gloves: new EquipmentItem({ category: eEquipmentCategory.Armor, type: eArmorType.Gloves }),
    holster: new EquipmentItem({ category: eEquipmentCategory.Armor, type: eArmorType.Holster }),
    kneepads: new EquipmentItem({ category: eEquipmentCategory.Armor, type: eArmorType.KneePads }),
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
