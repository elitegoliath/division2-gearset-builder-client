import { iReduxAction } from '.'
import { eGearSlot } from '../../constants'

const PREFIX = 'BUILDER_'

export const OPEN_EQUIPMENT_EDITOR = PREFIX + 'OPEN_EQUIPMENT_EDITOR'
export const openEquipmentEditor = (_gearSetSlot: eGearSlot): iReduxAction => ({
    type: OPEN_EQUIPMENT_EDITOR,
    payload: _gearSetSlot,
})

export const CLOSE_EQUIPMENT_EDITOR = PREFIX + 'CLOSE_EQUIPMENT_EDITOR'
export const closeEquipmentEditor = (): iReduxAction => ({
    type: CLOSE_EQUIPMENT_EDITOR,
})
