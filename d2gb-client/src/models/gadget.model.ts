import { Record, List } from 'immutable';
import { eGadgetType, eGadgetModel, eEquipmentCategory, tEquipmentItem } from '../constants';
import { GadgetMod } from './gadgetMod.model';

export type tGadget = {
    type?: eGadgetType;
    model?: eGadgetModel;
    mods?: List<GadgetMod>;
    // TODO: Add a series of properties that can hold gadget abilities, stats, cooldowns, etc.
};

const DefaultGadget = Record<tGadget>({

}, 'Gadget Model');

export class Gadget extends DefaultGadget implements tGadget, tEquipmentItem {
    public readonly category: eEquipmentCategory = eEquipmentCategory.Gadget;
    public readonly iconURL: string = '';
}