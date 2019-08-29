import React, { useReducer, useEffect } from 'react'
import { Modal, Button, Form, FormGroup, Header } from 'semantic-ui-react'
import { eArmorType, tFormSelectItem } from '../../../../constants'
import { List } from 'immutable'
import { Armor } from '../../../../models/armor.model'
import { ArmorModalReducer, ArmorModalInitialState, ArmorModalActions, tArmorModalFormFields } from './armorModal.state'
import { Brand } from '../../../../models/brand.model'

interface iArmorModal {
    armorList?: List<Armor>
    armorNameList?: List<tFormSelectItem>
    brandList?: List<Brand>
    brandNameList?: List<tFormSelectItem>
    fetchArmor?: Function
    fetchBrands?: Function
}

type tFormOption = {
    key: number,
    text: string,
    value: number,
}

export const ArmorModal = (_props: iArmorModal) => {
    // PROPS
    let { armorList, armorNameList, brandList, brandNameList, fetchArmor, fetchBrands } = _props

    // COMPONENT STATE
    const [internalState, internalDispatch] = useReducer(ArmorModalReducer, ArmorModalInitialState)
    const { isOpen, isAddingNew, hasSelectedArmor, formFields } = internalState

    const setFormField = (_value: tArmorModalFormFields) => {
        internalDispatch({type: ArmorModalActions.setFormFields, payload: { formFields: { ..._value } } })
    }

    const change = ((_e: any, { name, value }: any) => {
        setFormField({ [name]: value })
    })

    // Options for Armor Type.
    const typeOptions: tFormOption[] = [
        { key: eArmorType.Mask, text: eArmorType[eArmorType.Mask], value: eArmorType.Mask },
    ]

    // On Submit.
    const handleSubmit = () => {
        // TODO: Handle this.
    }

    // On Open.
    const handleOpen = () => {
        internalDispatch({ type: ArmorModalActions.setIsOpen, payload: { isOpen: true } })
    }

    // On mode change, which toggles between Adding New and Editing Existing.
    const changeMode = () => {
        internalDispatch({ type: ArmorModalActions.setIsAddingNew, payload: { isAddingNew: !internalState.isAddingNew } })
    }

    // // When an existing piece of armor has been selected for edit.
    const onArmorSelected = (_e: any, {value}: any) => {
        const selectedArmor: Armor = armorList.find(_a => _a.armorName === value)
        
        if (selectedArmor) {
            setFormField({
                armorType: selectedArmor.type,
                armorAmount: selectedArmor.baseArmor,
                armorBrand: selectedArmor.brand,
            })
        }
    }

    // // When a Brand has been selected...
    const onBrandSelected = (_e: any, {value}: any) => {
        const selectedBrand: Brand = brandList.find(_b => _b.name === value)

        if (selectedBrand) {
            setFormField({ armorBrand: selectedBrand })
        }
    }

    // When the Armor Modal has been closed.
    const closeArmorModal = () => {
        internalDispatch({ type: ArmorModalActions.setIsOpen, payload: { isOpen: false } })
    }

    // EFFECTS
    useEffect(() => {
        if (!brandList.size) {
            fetchBrands()
        }

        if (brandList && brandList.size && !armorList.size) {
            fetchArmor()
        }
    }, [armorList, brandList])


    // TEMPLATE
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
                                <Form.Input placeholder='Armor Model...' name='armorModel' label='Armor Model' value={formFields.armorModel || ''} onChange={change} />
                                <Form.Select placeholder='Armor Type...' name='armorType' options={typeOptions} label='Armor Type' value='' />
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
                                    <Form.Select placeholder='Armor Type...' name='type' options={typeOptions} label='Armor Type' value={formFields.armorType || null} />
                                }
                            </FormGroup>
                        </div>
                    }
                    
                    {(isAddingNew || hasSelectedArmor) &&
                    <div>
                        <FormGroup>
                            <Form.Input placeholder='Armor Amount...' name='amount' label='Armor Amount' value={formFields.armorAmount || 0} />
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

// STYLES
const modeButtonStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
}
