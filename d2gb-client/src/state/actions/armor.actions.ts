import { iReduxAction } from '../actions';
import { List } from 'immutable';
import { Armor } from '../../models/armor.model';

const PREFIX = 'ARMOR_'

export const RECEIVED_ARMOR_LIST = PREFIX + 'RECEIVED_ARMOR_LIST'
export const recievedArmorList = (_payload: List<Armor>): iReduxAction => ({
    type: RECEIVED_ARMOR_LIST,
    payload: _payload,
})

export const fetchArmorList = () => {
    return (_dispatch: any, _getState: any, getFirestore: any): void => {
        (async () => {
            console.log(getFirestore)
            try {
                // TODO: start loading state.
                const request = await getFirestore().collection('armor').get();
                let armorList: List<Armor> = List<Armor>();
                request.forEach((_doc: any) => {
                    armorList = armorList.push(new Armor({ ..._doc.data() }))
                });

                console.log('Armor List', armorList.toJSON());
            } catch (_e) {
                // TODO: end loading state, handle errors.
                console.log('Error: ', _e)
            }
        })()
    }
}