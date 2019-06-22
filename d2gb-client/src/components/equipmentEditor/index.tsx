import React from 'react'
import './index.scss'
import { Modal } from 'semantic-ui-react'
import { iAppState } from '../../state/reducers'
import { connect } from 'react-redux'
import { CLOSE_EQUIPMENT_EDITOR } from '../../state/actions/builder.actions'
import { Armor } from '../../models/armor.model'
import { Weapon } from '../../models/weapon.model'
import { Gadget } from '../../models/gadget.model'
import { eEquipmentCategory } from '../../constants'

export interface iEquipmentEditor {
    isOpen?: boolean
    closeEditor?: any
    model?: Armor | Weapon | Gadget
}

export const EquipmentEditor = (_props: iEquipmentEditor) => {
    const { isOpen, model } = _props

    const handleClose = () => {
        _props.closeEditor()
    }

    const renderCategory = (_model: Armor | Weapon | Gadget) => {
        switch (_model.category) {
            case eEquipmentCategory.Weapon: return weaponEditor(_model as Weapon)
            case eEquipmentCategory.Armor: return armorEditor(_model as Armor)
            case eEquipmentCategory.Gadget: return gadgetEditor(_model as Gadget)
            default: return <div>Sumthin is jacked here...</div>
        }
    }

    return (
        <Modal open={isOpen} onClose={handleClose}>
            <Modal.Content>
                {model && isOpen ? renderCategory(model) : <div></div>}
            </Modal.Content>
        </Modal>
    )
}

const weaponEditor = (_model: Weapon) => {
    return (<div>Editing Weapon</div>)
}

const armorEditor = (_model: Armor) => {
    return (<div>Editing Armor</div>)
}

const gadgetEditor = (_model: Gadget) => {
    return (<div>Editing Gadget</div>)
}

/**
 * Connect state to props.
 */
const mapStateToProps = (_state: iAppState) => ({
    isOpen: _state.builderState.isEquipmentEditorOpen,
    model: _state.builderState.equipmentEditorModel,
})

/**
 * Map dispatchers to props.
 */
const mapDispatchToProps = (_dispatch: any) => ({
    closeEditor: () => _dispatch({ type: CLOSE_EQUIPMENT_EDITOR }),
})

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentEditor)
