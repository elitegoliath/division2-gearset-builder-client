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
    icon?: string;
    iconURL?: string;
}

const DefaultEquipmentItem = Record<tEquipmentItem>({
    category: null,
    type: null,
    icon: null,
    iconURL: ''
}, 'Equipment Model');

const setIcon = (_cat: eEquipmentCategory, _type: number): string => {
    switch (_cat) {
        case eEquipmentCategory.Weapon: return setWeaponIcon(_type);
        case eEquipmentCategory.Armor: return setArmorIcon(_type);
        case eEquipmentCategory.Gadget: return setGadgetIcon(_type);
        default: return '';
    }
};

const setWeaponIcon = (_type: eWeaponType): string => {
    switch (_type) {
        default: return '';
    }
};

const setArmorIcon = (_type: eArmorType): string => {
    switch (_type) {
        case eArmorType.Mask: return 'Mask_Icon';
        case eArmorType.Backpack: return 'Backpack_Icon';
        case eArmorType.Chest: return 'Chest_Icon';
        case eArmorType.Gloves: return 'Gloves_Icon';
        case eArmorType.Holster: return 'Holster_Icon';
        case eArmorType.KneePads: return 'Kneepads_Icon';
    }
};

const setGadgetIcon = (_type: eGadgetType): string => {
    switch (_type) {
        default: return 'Gadget_Icon';
    }
};

export class EquipmentItem extends DefaultEquipmentItem implements tEquipmentItem {

    constructor (_params?: tEquipmentItem) {
        if (_params) {
            let icon = _params.icon || setIcon(_params.category, _params.type);
            super({ ..._params, icon });
        } else {
            super();
        }
    }

    // public with (_params: tEquipmentItem) {
    //     return this.merge(_params) as this;
    // }
}
