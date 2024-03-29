import { iReduxAction } from '../actions'
import { List } from 'immutable'
import { Armor } from '../../models/armor.model'
import { Brand } from '../../models/brand.model'
import { fetchBrandList } from './brand.actions';
import { iBrandState } from '../reducers/brand.reducer';

const PREFIX = 'ARMOR_'

export const RECEIVED_ARMOR_LIST = PREFIX + 'RECEIVED_ARMOR_LIST'
export const recievedArmorList = (_payload: List<Armor>): iReduxAction => ({
    type: RECEIVED_ARMOR_LIST,
    payload: _payload,
})

export const fetchArmorList = () => {
    return (_dispatch: any, _getState: any, getFirestore: any): void => {
        (async () => {
            try {
                // TODO: start loading state.
                const fs = getFirestore()
                const brandList: List<Brand> = _getState().brandState.brandList
                const armorRequest = await fs.collection('armor').get()

                let armorList: List<Armor> = List<Armor>()
                armorRequest.forEach((_doc: any) => {
                    let newArmor = new Armor({..._doc.data()})
                    let armorBrand = brandList.count && newArmor.brandName ? brandList.find(b => b.name === newArmor.brandName) : null
                    armorList = armorList.push(newArmor.with({brand: armorBrand}))
                })

                _dispatch(recievedArmorList(armorList))
            } catch (_e) {
                // TODO: end loading state, handle errors.
                console.log('Error: ', _e)
            }
        })()
    }
}