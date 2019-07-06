import React from 'react'
import { Modal, Button, Form, FormGroup } from 'semantic-ui-react'
import { eArmorType, tFormSelectItem } from '../../../../constants'
import { connect } from 'react-redux'
import { List } from 'immutable'
import { Armor } from '../../../../models/armor.model'

interface iArmorModal {
    armorList?: List<Armor>
    armorNameList?: List<tFormSelectItem>
    fetchArmor?: any
}

export const ArmorModal = (_props: iArmorModal) => {
    let { armorList, armorNameList, fetchArmor } = _props
    // let isOpen: boolean = false; // TODO: Handle this inside of redux.

    // let addingNew: boolean = false;

    console.log('Armor name list', armorNameList.toJS());

    const typeOptions: { key: number, text: string, value: number }[] = [
        { key: eArmorType.Mask, text: eArmorType[eArmorType.Mask], value: eArmorType.Mask },
    ]

    const handleSubmit = () => {

    }

    const handleOpen = () => {
        // isOpen = true
        if (!armorList.size) {
            armorList = fetchArmor()
        }
    }

    const handleClose = () => {
        // isOpen = false
    }

    return (
        <Modal
            basic
            onClose={handleClose}
            trigger={<Button size='mini' onClick={handleOpen}>Armor Modal</Button>}>
            <Modal.Content>
                {<Form inverted onSubmit={handleSubmit}>
                    <FormGroup widths='equal'>
                        {armorNameList ? <Form.Select placeholder='Select Existing Armor...' options={armorNameList.toJS()}></Form.Select> : ''}
                        <Form>
                            <Form.Input placeholder='Armor Model...' name='model' label='Armor Model' />
                            <Form.Select placeholder='Armor Type...' name='type' options={typeOptions} label='Armor Type' />
                            <Button>Add</Button>
                        </Form>
                    </FormGroup>
                    <FormGroup widths='equal'>
                        <Form.Input placeholder='Armor Model...' name='model' label='Armor Model' />
                        <Form.Select placeholder='Armor Type...' name='type' options={typeOptions} label='Armor Type' />
                    </FormGroup>
                </Form>}
            </Modal.Content>
        </Modal>
    )
}

/**
 * Connect state to props.
 */
// const mapStateToProps = (_state: iAppState) => ({
//     armorState: _state.armorState,
//     // armorNameList: _state.armorState.armorNameList,
// })

// /**
//  * Map dispatchers to props.
//  */
// const mapDispatchToProps = (_dispatch: any) => ({
//     fetchArmor: () => _dispatch(fetchArmorList()),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(ArmorModal)