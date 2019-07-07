import { iReduxAction } from '../../../../state/actions';

type tArmorModalState = {
    isOpen?: boolean
    isAddingNew?: boolean
    armorType?: number
}

export const ArmorModalActions = {
    setIsOpen: 'SET_IS_OPEN',
    setIsAddingNew: 'SET_IS_ADDING_NEW',
    setArmorType: 'SET_ARMOR_TYPE',
}

export const ArmorModalInitialState: tArmorModalState = {
    isOpen: false,
    isAddingNew: true,
    armorType: null,
}

export const ArmorModalReducer = (_state: tArmorModalState, _action: iReduxAction) => {
    switch(_action.type) {
        case ArmorModalActions.setIsOpen: return {isOpen: _action.payload}
        case ArmorModalActions.setIsAddingNew: return {isAddingNew: _action.payload}
        case ArmorModalActions.setArmorType: return {armorType: _action.payload}
        default: return _state
    }
}