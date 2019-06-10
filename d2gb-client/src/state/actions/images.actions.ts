import { iReduxAction } from '.';
import { List } from 'immutable';

const PREFIX = 'IMAGE_';

export type iImageURL = {
    name: string;
    url: string;
}

export const RECEIVE_IMAGE_URLS = PREFIX + 'RECEIVE_ICON_URLS';
export const recieveIconURLs = (_iconURLs: List<iImageURL>): iReduxAction => ({
    type: RECEIVE_IMAGE_URLS,
    payload: _iconURLs,
});

export const fetchIconURLs = () => {
    // TODO: stringly type and get an interface for the destructed 3rd argument object to make it easier to develop with.
    return (_dispatch: any, _getState: any, { getFirebase, getFirestore }: any): void => {
        // TODO: Add property ot state for whether icons have been loaded or are loading to prevent multiple calls.

        // TODO: Make an abstract class to handle async call to the firestore.
        // TODO: Make a constant for each collection name.
        
        (async () => {
            try {
                const request = await getFirestore().collection('icon_urls').get();
                // const iconUrlCollect = request.data();
                console.log('Got icon URLs: ', request);
                // SUCCESS DISPATCH
            } catch (_e) {
                console.log('Issues getting something from firestore.')
                // ERROR DISPATCH
            }
        })();
        

        
        const fakeList = List();
        _dispatch(recieveIconURLs(fakeList));
    };
}
