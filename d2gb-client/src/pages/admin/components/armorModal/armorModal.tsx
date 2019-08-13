import React, { useReducer, useEffect } from 'react'
import { Modal, Button, Form, FormGroup, Header } from 'semantic-ui-react'
import { eArmorType, tFormSelectItem } from '../../../../constants'
import { List } from 'immutable'
import { Armor } from '../../../../models/armor.model'
import { ArmorModalReducer, ArmorModalInitialState, ArmorModalActions } from './armorModal.state'
import { Brand } from '../../../../models/brand.model'

interface iArmorModal {
    armorList?: List<Armor>
    armorNameList?: List<tFormSelectItem>
    brandList?: List<Brand>
    brandNameList?: List<tFormSelectItem>
    fetchArmor?: any
    fetchBrands?: any
}

type tFormOption = {
    key: number,
    text: string,
    value: number,
}

export const ArmorModal = (_props: iArmorModal) => {
    let { armorList, armorNameList, brandList, brandNameList, fetchArmor, fetchBrands } = _props

    const [internalState, internalDispatch] = useReducer(ArmorModalReducer, ArmorModalInitialState)
    const { isOpen, isAddingNew, hasSelectedArmor, armorType, armorAmount } = internalState

    const typeOptions: tFormOption[] = [
        { key: eArmorType.Mask, text: eArmorType[eArmorType.Mask], value: eArmorType.Mask },
    ]

    const handleSubmit = () => {
        // TODO: Handle this.
    }

    const handleOpen = () => {
        internalDispatch({ type: ArmorModalActions.setIsOpen, payload: { isOpen: true } })
    }

    const changeMode = () => {
        internalDispatch({ type: ArmorModalActions.setIsAddingNew, payload: { isAddingNew: !internalState.isAddingNew } })
    }

    const onArmorSelected = (_e: any, {value}: any) => {
        const selectedArmor: Armor = armorList.find(_a => _a.armorName === value)
        
        internalDispatch({ type: ArmorModalActions.setArmorProps, payload: {
            armorType: selectedArmor.type,
            armorAmount: selectedArmor.baseArmor,
        }})
    }

    const onBrandSelected = (_e: any, {value}: any) => {
        console.log('Brand Selected: ', value)
    }

    const closeArmorModal = () => {
        internalDispatch({ type: ArmorModalActions.setIsOpen, payload: { isOpen: false } })
    }

    useEffect(() => {
        if (!brandList.size) {
            brandList = fetchBrands()
        }

        if (brandList && brandList.size && !armorList.size) {
            armorList = fetchArmor()
        }
    }, [armorList, brandList])

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
                            <Header as='h1' color='teal' textAlign='center'>Adding New Armor</Header>
                            <Button size='small' color='orange' style={modeButtonStyle} onClick={changeMode}>Edit Existing Armor</Button>
                            <FormGroup widths='equal'>
                                <Form.Input placeholder='Armor Model...' name='model' label='Armor Model' value='' />
                                <Form.Select placeholder='Armor Type...' name='type' options={typeOptions} label='Armor Type' value='' />
                            </FormGroup>
                        </div> :
                        <div>
                            <Header as='h1' color='teal' textAlign='center'>Editing Existing Armor</Header>
                            <Button size='small' color='orange' style={modeButtonStyle} onClick={changeMode}>Add New Armor</Button>
                            <FormGroup widths='equal'>
                                {armorNameList &&
                                    <Form.Select
                                        label='Existing Armor'
                                        placeholder='Select Existing Armor...'
                                        options={armorNameList.toJS()}
                                        onChange={onArmorSelected}
                                    ></Form.Select>
                                }
                                {hasSelectedArmor && 
                                    <Form.Select placeholder='Armor Type...' name='type' options={typeOptions} label='Armor Type' value={armorType} />
                                }
                            </FormGroup>
                        </div>
                    }
                    
                    {isAddingNew || hasSelectedArmor &&
                    <div>
                        <FormGroup>
                            <Form.Input placeholder='Armor Amount...' name='amount' label='Armor Amount' value={armorAmount} />
                            {brandNameList &&
                                <Form.Select
                                    label='Brand'
                                    placeholder='Select Brand...'
                                    options={brandNameList.toJS()}
                                    onChange={onBrandSelected}
                                ></Form.Select>
                            }
                        </FormGroup>
                        <Form.Button color='red' onClick={closeArmorModal}>Cancel</Form.Button>
                        <Form.Button color='green' content='Submit' />
                    </div>
                }
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
