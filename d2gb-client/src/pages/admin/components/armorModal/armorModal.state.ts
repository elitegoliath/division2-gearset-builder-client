import { Brand } from '../../../../models/brand.model'

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
}

interface iArmorModalAction {
    type?: string
    payload?: tArmorModalState
}

export const ArmorModalActions = {
    setIsOpen: 'SET_IS_OPEN',
    setIsAddingNew: 'SET_IS_ADDING_NEW',
    setFormFields: 'SET_FORM_FIELDS',
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
            console.log('form fields changed: ', _action.payload.formFields)
            return { ..._state, formFields: { ..._state.formFields, ..._action.payload.formFields }, hasSelectedArmor: true }
        }
        default: return _state
    }
}