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
                // await _dispatch(fetchBrandList())
                // const brandList = _getState
                // console.log(_getState())
                const fs = getFirestore()
                let brandList: List<Brand> = _getState().brandState.brandList

                if (brandList.count) {
                    const brandRequest = await fs.collection('brands').get()
                    brandRequest.forEach((_doc: any) => {
                        brandList = brandList.push(new Brand({ ..._doc.data() }))
                    })
                }
                const armorRequest = await fs.collection('armor').get()

                // let brandList: List<Brand> = List<Brand>()
                // brandList.forEach((_doc: any) => {
                //     brandList = brandList.push(new Brand({ ..._doc.data() }))
                // })

                let armorList: List<Armor> = List<Armor>()
                armorRequest.forEach((_doc: any) => {
                    // let newArmor = new Armor({..._doc.data()})
                    // let armorBrand: Brand | null = newArmor.brandName ? brandList.find(b => b.name === newArmor.brandName) : null
                    armorList = armorList.push(new Armor({ ..._doc.data() }))
                })

                _dispatch(recievedArmorList(armorList))
            } catch (_e) {
                // TODO: end loading state, handle errors.
                console.log('Error: ', _e)
            }
        })()
    }
}