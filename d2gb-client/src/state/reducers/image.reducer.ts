import { iReduxAction } from '../actions';
import * as Actions from '../actions/image.actions';

export type iImageState = {

}

export const defaultImageState: iImageState = {

}

const INITIAL_STATE: iImageState = defaultImageState;

export const ImageReducer = (_state: iImageState = INITIAL_STATE, _action: iReduxAction): iImageState => {
    switch (_action.type) {
        case Actions.FETCH_IMAGE_URL: return { ..._state, ..._action.payload }
        default: return _state;
    }
}
