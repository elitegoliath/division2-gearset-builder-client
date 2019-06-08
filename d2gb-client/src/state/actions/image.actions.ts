import { iReduxAction } from '.';
import { FirebaseRefs } from '../../firebase';

const PREFIX = 'IMAGE_';

export const FETCH_IMAGE = PREFIX + 'FETCH_IMAGE';

export const fetchImage = (_imageName: string): iReduxAction => ({
    type: FETCH_IMAGE,
    payload: FirebaseRefs.images.child(_imageName),
});
