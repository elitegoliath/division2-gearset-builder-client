import { iReduxAction } from '../actions';
import * as Actions from '../actions/images.actions';
import { List } from 'immutable';

export type iImageState = {
    iconURLs?: List<Actions.iImageURL>;
}

export const defaultImageState: iImageState = {
    iconURLs: null,
}

const INITIAL_STATE: iImageState = defaultImageState;

export const ImageReducer = (_state: iImageState = INITIAL_STATE, _action: iReduxAction): iImageState => {
    switch (_action.type) {
        case Actions.RECEIVE_ICON_URLS: {
            console.log('Icon URLs retrieved.');
            return { ..._state, iconURLs: _action.payload }
        }
        default: return _state;
    }
}
