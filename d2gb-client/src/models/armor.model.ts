import { Record, List } from 'immutable';
import { eArmorType, tBrand, tAttribute, tEquipmentItem, eEquipmentCategory } from '../constants';
import { Talent } from './talent.model';
import { ArmorMod } from './armorMod.model';

export type tArmor = {
    model?: string;
    type?: eArmorType;
    description?: string;
    brand?: tBrand;
    attributes?: List<tAttribute>;
    talents?: List<Talent>;
    mods?: List<ArmorMod>;
};

const DefaultArmor = Record<tArmor>({
    
}, 'Armor Model');

export class Armor extends DefaultArmor implements tArmor, tEquipmentItem {
    public readonly category: eEquipmentCategory = eEquipmentCategory.Armor;
    public readonly iconURL: string = '';
}