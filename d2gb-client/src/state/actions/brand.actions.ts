import { List } from 'immutable'
import { Brand } from '../../models/brand.model'
import { iReduxAction } from '.'

const PREFIX = 'BRAND_'

export const RECIEVED_BRAND_LIST = PREFIX + 'RECIEVED_BRAND_LIST'
export const recievedBrandList = (_payload: List<Brand>): iReduxAction => ({
    type: RECIEVED_BRAND_LIST,
    payload: _payload,
})

export const fetchBrandList = () => {
    return (_dispatch: any, _getState: any, getFirestore: any): void => {
        (async () => {
            try {
                const request = await getFirestore().collection('brands').get()
                let brandList: List<Brand> = List<Brand>()
                request.forEach((_doc: any) => {
                    brandList = brandList.push(new Brand({ ..._doc.data() }))
                })

                _dispatch(recievedBrandList(brandList))
            } catch (_e) {
                console.log('Error: ', _e)
            }
        })
    }
}