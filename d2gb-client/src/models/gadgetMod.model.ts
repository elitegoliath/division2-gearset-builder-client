import { Record } from 'immutable';

export type tGadgetMod = {
    // slot?: TODO: make an enum for gadget mod slots.
};

const DefaultGadgetMod = Record<tGadgetMod>({

}, 'Gadget Mod Model');

export class GadgetMod extends DefaultGadgetMod implements tGadgetMod {
    
}