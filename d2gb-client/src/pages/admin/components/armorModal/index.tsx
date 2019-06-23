import React from 'react'
import { Modal, Button, Form, FormGroup } from 'semantic-ui-react';
import { eArmorType } from '../../../../constants';
import { iAppState } from '../../../../state/reducers';
import { fetchArmorList } from '../../../../state/actions/armor.actions';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { Armor } from '../../../../models/armor.model';

interface iArmorModal {
    fetchArmor?: any
}

export const ArmorModal = (_props: iArmorModal) => {
    let armorList: List<Armor> = List<Armor>()

    const typeOptions: { key: number, text: string, value: number }[] = [
        { key: eArmorType.Mask, text: eArmorType[eArmorType.Mask], value: eArmorType.Mask },
    ]

    const handleSubmit = () => {

    }

    const handleOpen = () => {
        // TODO: check if a list of armor is in state.
        armorList = _props.fetchArmor()
    }

    const handleClose = () => {
        // TODO: Maybe nothing, remove if cleanup is not needed.
    }

    return (
        <Modal
            basic
            onClose={handleClose}
            trigger={<Button size='mini' onClick={handleOpen}>Armor Modal</Button>}>
            <Modal.Content>
                <Form inverted onSubmit={handleSubmit}>
                    <FormGroup widths='equal'>
                        <Form.Input placeholder='Armor Model...' name='model' label='Armor Model' />
                        <Form.Select placeholder='Armor Type...' name='type' options={typeOptions} label='Armor Type' />
                    </FormGroup>
                </Form>
            </Modal.Content>
        </Modal>
    )
}

/**
 * Connect state to props.
 */
const mapStateToProps = (_state: iAppState) => ({
})

/**
 * Map dispatchers to props.
 */
const mapDispatchToProps = (_dispatch: any) => ({
    fetchArmor: () => _dispatch(fetchArmorList())
})

export default connect(mapStateToProps, mapDispatchToProps)(ArmorModal)