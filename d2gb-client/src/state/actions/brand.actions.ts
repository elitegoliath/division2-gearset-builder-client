import { List } from 'immutable'
import { Brand } from '../../models/brand.model'
import { iReduxAction } from '.'

const PREFIX = 'BRAND_'

export const RECEIVED_BRAND_LIST = PREFIX + 'RECEIVED_BRAND_LIST'
export const receivedBrandList = (_payload: List<Brand>): iReduxAction => ({
    type: RECEIVED_BRAND_LIST,
    payload: _payload,
})

export const fetchBrandList = () => {
    return (_dispatch: any, _getState: any, getFirestore: any): void => {
        (async () => {
            try {
                const request = await getFirestore().collection('brands').get()
                let brandList: List<Brand> = List<Brand>()
                request.forEach((_doc: any) => {
                    brandList = brandList.push(new Brand({..._doc.data()}))
                })

                // console.log('fetch brands done', brandList.toJS())

                _dispatch(receivedBrandList(brandList))
            } catch (_e) {
                console.log('Error: ', _e)
            }
        })()
    }
}