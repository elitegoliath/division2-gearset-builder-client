interface iArmorModalAction {
    type?: string
    payload?: {
        isOpen?: boolean
        isAddingNew?: boolean
        hasSelectedArmor?: boolean
        armorType?: number
        armorAmount?: number
    }
}

type tArmorModalState = {
    isOpen?: boolean
    isAddingNew?: boolean
    hasSelectedArmor?: boolean
    armorType?: number
    armorAmount?: number
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
    armorAmount: null,
}

export const ArmorModalReducer = (_state: tArmorModalState, _action: iArmorModalAction) => {
    switch(_action.type) {
        case ArmorModalActions.setIsOpen: return {isOpen: _action.payload.isOpen}
        case ArmorModalActions.setIsAddingNew: return {
            ...ArmorModalInitialState,
            isOpen: true,
            isAddingNew: _action.payload.isAddingNew
        }
        case ArmorModalActions.setArmorProps: return {..._action.payload, hasSelectedArmor: true}
        default: return _state
    }
}