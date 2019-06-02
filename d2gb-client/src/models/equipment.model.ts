import { Record } from 'immutable';

export enum eArmorType {
    Mask,
    Backpack,
    Chest,
    Gloves,
    Holster,
    KneePads,
}

export enum eWeaponType {
    AssaultRifle,
    MarksmanRifle,
    LightMachineGun,
    SubMachineGun,
    Shotgun,
    Rifle,
    Pistol,
}

export enum eGadgetType {
    Pulse,
    Turret,
    Hive,
    ChemLauncher,
    Firefly,
    SeekerMine,
    Drone,
    Shield,
}

export enum eEquipmentCategory {
    Weapon,
    Armor,
    Gadget,
}

export type tEquipmentItem = {
    category?: number;
    type?: number;
}

const DefaultEquipmentItem = Record({
    category: null,
    type: null,
}, 'Equipment Model');

export class EquipmentItem extends DefaultEquipmentItem implements tEquipmentItem {

    constructor (_params?: tEquipmentItem) {
        if (_params) {
            super(_params);
        } else {
            super();
        }
    }

    // public with (_params: tEquipmentItem) {
    //     return this.merge(_params) as this;
    // }
}
