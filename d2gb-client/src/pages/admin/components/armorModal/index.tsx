import React from 'react'
import { Modal, Button, Form, FormGroup } from 'semantic-ui-react'
import { eArmorType } from '../../../../constants'
import { iAppState } from '../../../../state/reducers'
import { fetchArmorList } from '../../../../state/actions/armor.actions'
import { connect } from 'react-redux'
import { List } from 'immutable'
import { Armor } from '../../../../models/armor.model'

interface iArmorModal {
    armorList?: List<Armor>
    fetchArmor?: any
}

export const ArmorModal = (_props: iArmorModal) => {
    let { armorList } = _props
    let isOpen: boolean = false;

    const typeOptions: { key: number, text: string, value: number }[] = [
        { key: eArmorType.Mask, text: eArmorType[eArmorType.Mask], value: eArmorType.Mask },
    ]

    const handleSubmit = () => {

    }

    const handleOpen = () => {
        isOpen = true
        if (!armorList) {
            armorList = _props.fetchArmor()
        }
    }

    const handleClose = () => {
        isOpen = false
    }

    return (
        <Modal
            basic
            onClose={handleClose}
            trigger={<Button size='mini' onClick={handleOpen}>Armor Modal</Button>}>
            <Modal.Content>
                {isOpen ? <Form inverted onSubmit={handleSubmit}>
                    <FormGroup widths='equal'>
                        <Form.Input placeholder='Armor Model...' name='model' label='Armor Model' />
                        <Form.Select placeholder='Armor Type...' name='type' options={typeOptions} label='Armor Type' />
                    </FormGroup>
                </Form> : <div></div>}
            </Modal.Content>
        </Modal>
    )
}

/**
 * Connect state to props.
 */
const mapStateToProps = (_state: iAppState) => ({
    armorList: _state.armorState.armorList
})

/**
 * Map dispatchers to props.
 */
const mapDispatchToProps = (_dispatch: any) => ({
    fetchArmor: () => _dispatch(fetchArmorList())
})

export default connect(mapStateToProps, mapDispatchToProps)(ArmorModal)