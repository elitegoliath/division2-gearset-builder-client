import { iReduxAction } from '.';
import { List } from 'immutable';

const PREFIX = 'IMAGE_';

export type iImageURL = {
    name: string;
    url: string;
}

// export const fetchImage = (_imageName: string): iReduxAction => ({
//     type: FETCH_IMAGE,
//     payload: FirebaseRefs.images.child(_imageName),
// });

export const RECEIVE_IMAGE_URLS = PREFIX + 'RECEIVE_ICON_URLS';
export const recieveIconURLs = (_iconURLs: List<iImageURL>): iReduxAction => ({
    type: RECEIVE_IMAGE_URLS,
    payload: _iconURLs,
});

export const fetchIconURLs = () => {
    return (_dispatch: any) => {
        // TODO: Add property ot state for whether icons have been loaded or are loading to prevent multiple calls.
        // const iconURLs = 
        console.log('Got icon URLs: ');
        const fakeList = List();
        _dispatch(recieveIconURLs(fakeList));
    };
}
