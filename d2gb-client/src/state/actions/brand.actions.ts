import { List } from 'immutable'
import { Brand } from '../../models/brand.model'

const PREFIX = 'BRAND_'

export const RECIEVED_BRAND_LIST = PREFIX + 'RECIEVED_BRAND_LIST'
export const recievedBrandList = (_payload: List<Brand>)


export const fetchBrandList = () => {

}