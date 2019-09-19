import { Brand } from '../../../../models/brand.model'
import { List } from 'immutable'
import { Armor } from '../../../../models/armor.model'

export type tArmorModalFormFields = {
    armorModel?: string
    armorType?: number
    armorAmount?: number
    armorBrand?: Brand
    armorAttributeLimit?: number
}

type tArmorModalState = {
    isOpen?: boolean
    isAddingNew?: boolean
    hasSelectedArmor?: boolean
    formFields?: tArmorModalFormFields
    modalBrandList?: List<Brand>
    modalArmorList?: List<Armor>
}

interface iArmorModalAction {
    type?: string
    payload?: tArmorModalState
}

export const ArmorModalActions = {
    setIsOpen: 'SET_IS_OPEN',
    setIsAddingNew: 'SET_IS_ADDING_NEW',
    setFormFields: 'SET_FORM_FIELDS',
    setLists: 'SET_LISTS',
}

export const ArmorModalInitialState: tArmorModalState = {
    isOpen: false,
    isAddingNew: true,
    hasSelectedArmor: false,
    formFields: {
        armorModel: '',
        armorType: null,
        armorAmount: 0,
        armorBrand: null,
        armorAttributeLimit: 0,
    },
    modalBrandList: List<Brand>()
}

export const ArmorModalReducer = (_state: tArmorModalState, _action: iArmorModalAction): tArmorModalState => {
    switch(_action.type) {
        case ArmorModalActions.setIsOpen: return {..._state, isOpen: _action.payload.isOpen}
        case ArmorModalActions.setIsAddingNew: return {
            ...ArmorModalInitialState,
            isOpen: true,
            isAddingNew: _action.payload.isAddingNew
        }
        case ArmorModalActions.setFormFields: {
            // TODO: Add checker for Armor and Brand dropdowns in here.

            return { ..._state, formFields: {
                    ..._state.formFields,
                    ..._action.payload.formFields
                }, hasSelectedArmor: true }
        }
        case ArmorModalActions.setLists: return {..._state, ..._action.payload}
        default: return _state
    }
}