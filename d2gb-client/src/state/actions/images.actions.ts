import { iReduxAction } from '.'
import { List } from 'immutable'

const PREFIX = 'IMAGE_'

export type iImageURL = {
    name: string
    url: string
}

export const RECEIVE_ICON_URLS = PREFIX + 'RECEIVE_ICON_URLS'
export const recieveIconURLs = (_iconURLs: List<iImageURL>): iReduxAction => ({
    type: RECEIVE_ICON_URLS,
    payload: _iconURLs,
})

// TODO: Add strong typing.
export const fetchIconURLs = () => {
    return (_dispatch: any, _getState: any, getFirestore: any): void => {
        // TODO: Add property ot state for whether icons have been loaded or are loading to prevent multiple calls.

        // TODO: Make an abstract class to handle async call to the firestore.
        // TODO: Make a constant for each collection name.

        (async () => {
            try {
                const request = await getFirestore().collection('icon_urls').get()
                let iconUrlList: List<iImageURL> = List<iImageURL>()
                request.forEach((_doc: any) => {
                    iconUrlList = iconUrlList.push(_doc.data())
                })

                // SUCCESS DISPATCH
                _dispatch(recieveIconURLs(iconUrlList));
            } catch (_e) {
                // ERROR DISPATCH
                console.log('Issues getting something from firestore.')
            }
        })()
    }
}
