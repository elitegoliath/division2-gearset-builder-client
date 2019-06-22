import { Record } from 'immutable'
import Constants from '../constants'

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

// export enum eGadgetType {
//     Pulse,
//     Turret,
//     Hive,
//     ChemLauncher,
//     Firefly,
//     SeekerMine,
//     Drone,
//     Shield,
// }

// export enum eEquipmentCategory {
//     Weapon,
//     Armor,
//     Gadget,
// }

// export type tEquipmentItem = {
//     category?: number;
// }

// const DefaultEquipmentItem = Record<tEquipmentItem>({
//     category: null,
// }, 'Equipment Model');

// const setIcon = (_cat: eEquipmentCategory, _type: number): string => {
//     switch (_cat) {
//         case eEquipmentCategory.Weapon: return setWeaponIcon(_type);
//         case eEquipmentCategory.Armor: return setArmorIcon(_type);
//         case eEquipmentCategory.Gadget: return setGadgetIcon(_type);
//         default: return '';
//     }
// };

// const setWeaponIcon = (_type: eWeaponType): string => {
//     switch (_type) {
//         default: return Constants.ICON_GEAR_DEFAULT;
//     }
// };

// const setArmorIcon = (_type: eArmorType): string => {
//     switch (_type) {
//         case eArmorType.Mask: return Constants.ICON_GEAR_MASK;
//         case eArmorType.Backpack: return Constants.ICON_GEAR_BACKPACK;
//         case eArmorType.Chest: return Constants.ICON_GEAR_CHEST;
//         case eArmorType.Gloves: return Constants.ICON_GEAR_GLOVES;
//         case eArmorType.Holster: return Constants.ICON_GEAR_HOLSTER;
//         case eArmorType.KneePads: return Constants.ICON_GEAR_KNEEPADS;
//         default: return Constants.ICON_GEAR_DEFAULT;
//     }
// };

// const setGadgetIcon = (_type: eGadgetType): string => {
//     switch (_type) {
//         default: return Constants.ICON_GEAR_DEFAULT;
//     }
// };

// export class EquipmentItem extends DefaultEquipmentItem implements tEquipmentItem {

//     constructor(_params?: tEquipmentItem) {
//         if (_params) {
//             super(_params);
//         } else {
//             super();
//         }
//     }
// }
