import { Record, List } from 'immutable'
import Constants, { eGadgetType, eGadgetModel, eEquipmentCategory, eGearSlot } from '../constants'
import { GadgetMod } from './gadgetMod.model'

export type tGadget = {
    gearSlot?: eGearSlot
    type?: eGadgetType
    model?: eGadgetModel
    mods?: List<GadgetMod>
    iconURL?: string
    readonly category?: eEquipmentCategory
    // TODO: Add a series of properties that can hold gadget abilities, stats, cooldowns, etc.
};

const DefaultGadget = Record<tGadget>({
    category: eEquipmentCategory.Gadget,
    iconURL: Constants.ICON_GEAR_DEFAULT,
}, 'Gadget Model')

export class Gadget extends DefaultGadget implements tGadget {
    constructor(_params?: tGadget) {
        if (_params) {
            super(_params);
        } else {
            super();
        }
    }
}