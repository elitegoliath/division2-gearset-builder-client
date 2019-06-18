import { Record, List } from 'immutable';
import { tModifier, eArmorModSlotType } from '../constants';

export type tArmorMod = {
    slot?: eArmorModSlotType;
    modifiers?: List<tModifier>;
};

const DefaultArmorMod = Record<tArmorMod>({

}, 'Armor Mod Model');

export class ArmorMod extends DefaultArmorMod implements tArmorMod {

}