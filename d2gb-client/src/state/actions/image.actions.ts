import { iReduxAction } from '.';
import { FirebaseRefs } from '../../firebase';

const PREFIX = 'IMAGE_';

export const FETCH_IMAGE_URL = PREFIX + 'FETCH_IMAGE_URL';

// export const fetchImage = (_imageName: string): iReduxAction => ({
//     type: FETCH_IMAGE,
//     payload: FirebaseRefs.images.child(_imageName),
// });

export const fetchImageURL = (_imageName: string) => {
    async () => {
        // TODO: Add a loading state.
        FirebaseRefs.icons.child(`${_imageName}.png`).getDownloadURL();
    };
}
