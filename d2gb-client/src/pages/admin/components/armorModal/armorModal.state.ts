import { Brand } from '../../../../models/brand.model'

type tArmorModalState = {
    isOpen?: boolean
    isAddingNew?: boolean
    hasSelectedArmor?: boolean
    armorType?: number
    armorAmount?: number
    armorBrand?: Brand
    armorAttributeLimit?: number
}

interface iArmorModalAction {
    type?: string
    payload: tArmorModalState
}

export const ArmorModalActions = {
    setIsOpen: 'SET_IS_OPEN',
    setIsAddingNew: 'SET_IS_ADDING_NEW',
    setArmorProps: 'SET_ARMOR_PROPS',
}

export const ArmorModalInitialState: tArmorModalState = {
    isOpen: false,
    isAddingNew: true,
    hasSelectedArmor: false,
    armorType: null,
    armorAmount: 0,
    armorBrand: null,
    armorAttributeLimit: 0,
}

export const ArmorModalReducer = (_state: tArmorModalState, _action: iArmorModalAction) => {
    switch(_action.type) {
        case ArmorModalActions.setIsOpen: return {..._state, isOpen: _action.payload.isOpen}
        case ArmorModalActions.setIsAddingNew: return {
            ...ArmorModalInitialState,
            isOpen: true,
            isAddingNew: _action.payload.isAddingNew
        }
        case ArmorModalActions.setArmorProps: return {..._state, ..._action.payload, hasSelectedArmor: true}
        default: return _state
    }
}