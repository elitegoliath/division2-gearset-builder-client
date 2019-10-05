import { Attribute } from '../../models/attribute.model'
import { List } from 'immutable'
import { iReduxAction } from './index'

const PREFIX = 'ATTRIBUTE_'

export const RECEIVED_ATTRIBUTE_LIST = PREFIX + 'RECEIVED_ATTRIBUTE_LIST'
export const receivedAttributeList = (_payload: List<Attribute>): iReduxAction => ({
    type: RECEIVED_ATTRIBUTE_LIST,
    payload: _payload,
})

export const fetchAttributeList = () => {
    return (_dispatch: any, _getState: any, getFirestore: any): void => {
        (async () => {
            try {
                const request = await getFirestore().collection('attributes').get()
                let attributeList: List<Attribute> = List<Attribute>()
                request.forEach((_doc: any) => {
                    attributeList = attributeList.push(new Attribute({..._doc.data()}))
                })

                _dispatch(receivedAttributeList(attributeList))
            } catch (_e) {
                console.log('Error: ', _e)
            }
        })()
    }
}