import React, { useState, useReducer, useEffect } from 'react'
import { Modal, Button, Form, FormGroup, Header } from 'semantic-ui-react'
import { eArmorType, tFormSelectItem } from '../../../../constants'
import { connect } from 'react-redux'
import { List } from 'immutable'
import { Armor } from '../../../../models/armor.model'
import { ArmorModalReducer, ArmorModalInitialState, ArmorModalActions } from './armorModal.state';

interface iArmorModal {
    armorList?: List<Armor>
    armorNameList?: List<tFormSelectItem>
    fetchArmor?: any
}

export const ArmorModal = (_props: iArmorModal) => {
    let { armorList, armorNameList, fetchArmor } = _props

    const [internalState, internalDispatch] = useReducer(ArmorModalReducer, ArmorModalInitialState)
    const {isOpen, isAddingNew, armorType} = internalState

    // TODO: Replace these with useReducer
    // const [isOpen, setIsOpen] = useState(false)
    // const [isAddingNew, setIsAddingNew] = useState(true)
    // const [armorType, setArmorType] = useState(null)

    const typeOptions: { key: number, text: string, value: number }[] = [
        { key: eArmorType.Mask, text: eArmorType[eArmorType.Mask], value: eArmorType.Mask },
    ]

    const handleSubmit = () => {

    }

    const handleOpen = () => {
        internalDispatch({ type: ArmorModalActions.setIsOpen, payload: true })
    }

    const changeMode = () => {
        internalDispatch({ type: ArmorModalActions.setIsAddingNew, payload: !internalState.isAddingNew })
    }

    const onArmorSelected = (_e: any, {value}: any) => {
        const selectedArmor: Armor = armorList.find(_a => _a.armorName === value)
        internalDispatch({ type: ArmorModalActions.setArmorType, payload: selectedArmor.type })
    }

    const closeArmorModal = () => {
        internalDispatch({ type: ArmorModalActions.setIsOpen, payload: false })
    }

    useEffect(() => {
        console.log('Use Effect')
        if (!armorList.size) {
            armorList = fetchArmor()
        }
    }, [armorList])

    return (
        <Modal
            basic
            closeOnEscape={false}
            closeOnDimmerClick={false}
            open={isOpen}
            dimmer='blurring'
            trigger={<Button size='mini' onClick={handleOpen}>Armor Modal</Button>}>
            <Modal.Content>
                <Form inverted onSubmit={handleSubmit}>
                    {isAddingNew ?
                    <div>
                        <Header as='h1' color='teal' textAlign='center'>Editing Existing Armor</Header>
                        <Button size='small' color='orange' style={modeButtonStyle} onClick={changeMode}>Add New Armor</Button>
                        <FormGroup widths='equal'>
                            <Form.Input placeholder='Armor Model...' name='model' label='Armor Model' />
                            <Form.Select placeholder='Armor Type...' name='type' options={typeOptions} label='Armor Type' />
                        </FormGroup>
                    </div> :
                    <div>
                        <Header as='h1' color='teal' textAlign='center'>Adding New Armor</Header>
                        <Button size='small' color='orange' style={modeButtonStyle} onClick={changeMode}>Edit Existing Armor</Button>
                        <FormGroup widths='equal'>
                            {armorNameList ?
                                <Form.Select
                                    label='Select Existing Armor'
                                    placeholder='Select Existing Armor...'
                                    options={armorNameList.toJS()}
                                    onChange={onArmorSelected}
                                ></Form.Select> :
                                ''
                            }
                            <Form.Select placeholder='Armor Type...' name='type' options={typeOptions} label='Armor Type' value={armorType} />
                        </FormGroup>
                    </div>}
                    <Form.Button color='red' onClick={closeArmorModal}>Cancel</Form.Button>
                    <Form.Button color='green' content='Submit' />
                </Form>
            </Modal.Content>
        </Modal>
    )
}

const modeButtonStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
}



// const renderAddNew = () => {

// }

// const renderEditExisting = () => {
    
// }