import { iReduxAction } from '.';
import { tEquipmentItem } from '../../constants';

const PREFIX = 'BUILDER_';

// export const CHANGE_TRACKER = PREFIX + 'CHANGE_TRACKER';

// export const changeNumTracker = (numTracker: number): iReduxAction => ({
//     type: CHANGE_TRACKER,
//     payload: {numTracker},
// });

export const OPEN_EQUIPMENT_EDITOR = PREFIX + 'OPEN_EQUIPMENT_EDITOR';
export const openEquipmentEditor = (_equipmentItem: tEquipmentItem): iReduxAction => ({
    type: OPEN_EQUIPMENT_EDITOR,
    payload: _equipmentItem,
});

export const CLOSE_EQUIPMENT_EDITOR = PREFIX + 'CLOSE_EQUIPMENT_EDITOR';
export const closeEquipmentEditor = (): iReduxAction => ({
    type: CLOSE_EQUIPMENT_EDITOR,
});