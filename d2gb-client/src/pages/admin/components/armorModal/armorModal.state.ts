import { Brand } from '../../../../models/brand.model'
import { List } from 'immutable'
import { Armor } from '../../../../models/armor.model'

export type tArmorModalFormFields = {
    armorModel?: string
    armorType?: number
    armorAmount?: number
    armorBrandName?: string
    armorAttributeLimit?: number
}

type tArmorModalState = {
    isOpen?: boolean
    isAddingNew?: boolean
    hasSelectedArmor?: boolean
    formFields?: tArmorModalFormFields
    modalBrandList?: List<Brand>
    modalArmorList?: List<Armor>
    selectedArmorName?: string
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
    setSelectedArmor: 'SET_SELECTED_ARMOR',
}

export const ArmorModalInitialState: tArmorModalState = {
    isOpen: false,
    isAddingNew: true,
    hasSelectedArmor: false,
    formFields: {
        armorModel: '',
        armorType: null,
        armorAmount: 0,
        armorBrandName: null,
        armorAttributeLimit: 0,
    },
    modalBrandList: List<Brand>(),
    modalArmorList: List<Armor>(),
    selectedArmorName: '',
}

export const ArmorModalReducer = (_state: tArmorModalState, _action: iArmorModalAction): tArmorModalState => {
    switch(_action.type) {
        case ArmorModalActions.setIsOpen: return {..._state, isOpen: _action.payload.isOpen}

        case ArmorModalActions.setIsAddingNew: return {
            ...ArmorModalInitialState,
            modalBrandList: _state.modalBrandList,
            modalArmorList: _state.modalArmorList,
            isOpen: true,
            isAddingNew: _action.payload.isAddingNew
        }

        case ArmorModalActions.setFormFields: {
            return {
                ..._state,
                formFields: {
                    ..._state.formFields,
                    ..._action.payload.formFields
                },
                hasSelectedArmor: true
            }
        }

        case ArmorModalActions.setLists: return {..._state, ..._action.payload}

        case ArmorModalActions.setSelectedArmor: {
            const armorName = _action.payload.selectedArmorName
            const selectedArmor: Armor = _state.modalArmorList.find(_a => _a.armorName === armorName)

            if (selectedArmor) {
                return {
                    ..._state,
                    hasSelectedArmor: true,
                    formFields: {
                        ..._state.formFields,
                        armorType: selectedArmor.type,
                        armorAmount: selectedArmor.baseArmor,
                        armorBrandName: selectedArmor.brand.name,
                    }
                }
            } else {
                return _state
                // TODO: Some error catching here, maybe.
            }
        } break

        default: return _state
    }
}

const selectArmor = (_armorName: string) => {

}