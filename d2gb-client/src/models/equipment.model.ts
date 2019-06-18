import { Record } from 'immutable';
import Constants from '../constants';

// export enum eArmorType {
//     Mask,
//     Backpack,
//     Chest,
//     Gloves,
//     Holster,
//     KneePads,
// }

// export enum eWeaponType {
//     AssaultRifle,
//     MarksmanRifle,
//     LightMachineGun,
//     SubMachineGun,
//     Shotgun,
//     Rifle,
//     Pistol,
// }

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

// export enum eEquipmentCategory {
//     Weapon,
//     Armor,
//     Gadget,
// }

export type tEquipmentItem = {
    category?: number;
    type?: number;
    iconURL?: string;
}

const DefaultEquipmentItem = Record<tEquipmentItem>({
    category: null,
    type: null,
    iconURL: Constants.ICON_GEAR_DEFAULT,
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
        default: return Constants.ICON_GEAR_DEFAULT;
    }
};

const setArmorIcon = (_type: eArmorType): string => {
    switch (_type) {
        case eArmorType.Mask: return Constants.ICON_GEAR_MASK;
        case eArmorType.Backpack: return Constants.ICON_GEAR_BACKPACK;
        case eArmorType.Chest: return Constants.ICON_GEAR_CHEST;
        case eArmorType.Gloves: return Constants.ICON_GEAR_GLOVES;
        case eArmorType.Holster: return Constants.ICON_GEAR_HOLSTER;
        case eArmorType.KneePads: return Constants.ICON_GEAR_KNEEPADS;
        default: return Constants.ICON_GEAR_DEFAULT;
    }
};

const setGadgetIcon = (_type: eGadgetType): string => {
    switch (_type) {
        default: return Constants.ICON_GEAR_DEFAULT;
    }
};

export class EquipmentItem extends DefaultEquipmentItem implements tEquipmentItem {

    constructor (_params?: tEquipmentItem) {
        if (_params) {
            let iconURL = _params.iconURL || setIcon(_params.category, _params.type);
            super({ ..._params, iconURL });
        } else {
            super();
        }
    }

    // public with (_params: tEquipmentItem) {
    //     return this.merge(_params) as this;
    // }
}
