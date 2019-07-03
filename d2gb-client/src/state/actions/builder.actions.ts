import { iReduxAction } from '.'
import { Armor } from '../../models/armor.model'
import { Weapon } from '../../models/weapon.model'
import { Gadget } from '../../models/gadget.model'
import { eEquipmentCategory } from '../../constants';

const PREFIX = 'BUILDER_'

export const OPEN_EQUIPMENT_EDITOR = PREFIX + 'OPEN_EQUIPMENT_EDITOR';
export const openEquipmentEditor = (_gearSetSlot: string): iReduxAction => ({
    type: OPEN_EQUIPMENT_EDITOR,
    payload: _equipmentItem,
});

export const CLOSE_EQUIPMENT_EDITOR = PREFIX + 'CLOSE_EQUIPMENT_EDITOR';
export const closeEquipmentEditor = (): iReduxAction => ({
    type: CLOSE_EQUIPMENT_EDITOR,
});