import React from 'react';
import './index.scss';
import { Modal } from 'semantic-ui-react';
import { iAppState } from '../../state/reducers';
import { connect } from 'react-redux';
import { EquipmentItem, eEquipmentCategory } from '../../models/equipment.model';
import { CLOSE_EQUIPMENT_EDITOR } from '../../state/actions/builder.actions';

export interface iEquipmentEditor {
    isOpen?: boolean;
    model?: EquipmentItem;
    closeEditor?: any;
}

export const EquipmentEditor = (_props: iEquipmentEditor) => {
    const { isOpen, model } = _props;

    const handleClose = () => {
        _props.closeEditor();
    };

    return (
        <Modal open={isOpen} onClose={handleClose}>
            <Modal.Content>
                <div className='equipment-editor'>
                    {model ? eEquipmentCategory[model.category] : 'No Model'}
                </div>
            </Modal.Content>
        </Modal>
    );
};

/**
 * Connect state to props.
 */
const mapStateToProps = (_state: iAppState) => ({
    isOpen: _state.builderState.isEquipmentEditorOpen,
    model: _state.builderState.equipmentEditorModel,
});

/**
 * Map dispatchers to props.
 */
const mapDispatchToProps = (_dispatch: any) => ({
    closeEditor: () => _dispatch({ type: CLOSE_EQUIPMENT_EDITOR }),
});

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentEditor);
