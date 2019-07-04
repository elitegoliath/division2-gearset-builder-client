import { Record, List } from 'immutable'
import Constants, { eGadgetType, eGadgetModel, eEquipmentCategory, eGearSlot, tGearSlot } from '../constants'
import { GadgetMod } from './gadgetMod.model'

export type tGadget = {
    gearSlot?: tGearSlot
    type?: eGadgetType
    model?: eGadgetModel
    mods?: List<GadgetMod>
    iconURL?: string
    readonly category?: eEquipmentCategory
    // TODO: Add a series of properties that can hold gadget abilities, stats, cooldowns, etc.
};

const DefaultGadget = Record<tGadget>({
    gearSlot: null,
    type: null,
    model: null,
    mods: null,
    iconURL: Constants.ICON_GEAR_DEFAULT,
    category: eEquipmentCategory.Gadget,
}, 'Gadget Model')

export class Gadget extends DefaultGadget implements tGadget {
    constructor(_params?: tGadget) {
        if (_params) {
            super({..._params})
        } else {
            super();
        }
    }
}