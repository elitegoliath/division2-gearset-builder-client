import { iReduxAction } from '.';

const PREFIX = 'BUILDER_';

export const CHANGE_TRACKER = PREFIX + 'CHANGE_TRACKER';

export const changeNumTracker = (numTracker: number): iReduxAction => ({
    type: CHANGE_TRACKER,
    payload: {numTracker},
});