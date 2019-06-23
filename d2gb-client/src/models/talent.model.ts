import { Record, List } from 'immutable'
import { tModifier, tRequirement } from '../constants'

export type tTalent = {
    // compatibleWeaponModels?: List<eWeaponModel>
    // compatibleArmorModels?: List<eArmorModel>
    name?: string
    iconURL?: string
    modSymbolURL?: string
    description?: string
    modifiers?: List<tModifier>
    requirements?: tRequirement
};

const DefaultTalent = Record<tTalent>({

}, 'Talent Model')

export class Talent extends DefaultTalent implements tTalent {
    
}