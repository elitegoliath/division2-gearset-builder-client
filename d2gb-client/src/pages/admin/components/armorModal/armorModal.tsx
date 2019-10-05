import React, { useReducer, useEffect } from 'react'
import { Modal, Button, Form, FormGroup, Header, ListItem, ListContent, List as FormList } from 'semantic-ui-react'
import { eArmorType, tFormSelectItem } from '../../../../constants'
import { List } from 'immutable'
import { Armor, Brand, Attribute } from '../../../../models'
import { ArmorModalReducer, ArmorModalInitialState, ArmorModalActions, tArmorModalFormFields } from './armorModal.state'

interface iArmorModal {
    armorList?: List<Armor>
    armorNameList?: List<tFormSelectItem>
    brandList?: List<Brand>
    brandNameList?: List<tFormSelectItem>
    attributeList?: List<Attribute>
    fetchArmor?: Function
    fetchBrands?: Function
    fetchAttributes?: Function
}

type tFormOption = {
    key: number,
    text: string,
    value: number,
}

export const ArmorModal = (_props: iArmorModal) => {
    // PROPS
    let {armorList, armorNameList, brandList, brandNameList, attributeList, fetchArmor, fetchBrands, fetchAttributes} = _props

    // COMPONENT STATE
    const [internalState, internalDispatch] = useReducer(ArmorModalReducer, ArmorModalInitialState)
    const {isOpen, isAddingNew, hasSelectedArmor, formFields} = internalState

    const setFormField = (_value: tArmorModalFormFields) => {
        internalDispatch({type: ArmorModalActions.setFormFields, payload: {formFields: {..._value}}})
    }

    const change = (_e: any, {name, value}: any) => {
        setFormField({[name]: value})
    }

    // Options for Armor Type.
    const typeOptions: tFormOption[] = [
        {key: eArmorType.Mask, text: eArmorType[eArmorType.Mask], value: eArmorType.Mask},
    ]

    // On Submit.
    const handleSubmit = () => {
        // TODO: Handle this.
    }

    // On Open.
    const handleOpen = () => {
        internalDispatch({type: ArmorModalActions.setIsOpen, payload: {isOpen: true}})
    }

    // On mode change, which toggles between Adding New and Editing Existing.
    const changeMode = () => {
        internalDispatch({
            type: ArmorModalActions.setIsAddingNew,
            payload: {isAddingNew: !internalState.isAddingNew}
        })
    }

    // When an existing piece of armor has been selected for edit.
    const onArmorSelected = (_e: any, {value}: any) => {
        internalDispatch({type: ArmorModalActions.setSelectedArmor, payload: {selectedArmorName: value}})
    }

    // When the Armor Modal has been closed.
    const closeArmorModal = () => {
        internalDispatch({type: ArmorModalActions.setIsOpen, payload: {isOpen: false}})
    }

    // EFFECTS
    useEffect(() => {
        if (!brandList.size) fetchBrands()
        if (!attributeList.size) fetchAttributes()

        if (brandList && brandList.size && !armorList.size) {
            fetchArmor()
        }

        internalDispatch({
            type: ArmorModalActions.setLists, payload: {
                modalBrandList: brandList,
                modalArmorList: armorList,
                modalAttributeList: attributeList,
            }
        })
    }, [armorList, brandList, attributeList, fetchArmor, fetchBrands, fetchAttributes])


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
                            <Button size='small' color='orange' style={modeButtonStyle} onClick={changeMode}>
                                Edit Existing Armor
                            </Button>

                            <FormGroup widths='equal'>
                                <Form.Input placeholder='Armor Model...'
                                            name='armorModel'
                                            label='Armor Model'
                                            value={formFields.armorModel || ''}
                                            onChange={change}
                                />
                                <Form.Select placeholder='Armor Type...'
                                             name='armorType'
                                             options={typeOptions}
                                             label='Armor Type'
                                             value={(typeof formFields.armorType !== 'undefined') ? formFields.armorType : null}
                                             onChange={change}
                                />
                            </FormGroup>
                        </div> :
                        <div>
                            <Header as='h1' color='teal' textAlign='center'>Editing Existing Armor</Header>
                            <Button size='small' color='orange' style={modeButtonStyle} onClick={changeMode}>
                                Add New Armor
                            </Button>

                            <FormGroup widths='equal'>
                                {armorNameList &&
                                <Form.Select label='Existing Armor'
                                             placeholder='Select Existing Armor...'
                                             name='armorModel'
                                             options={armorNameList.toJS()}
                                             onChange={onArmorSelected}
                                />
                                }
                                {hasSelectedArmor &&
                                <Form.Select placeholder='Armor Type...'
                                             name='armorType'
                                             options={typeOptions}
                                             label='Armor Type'
                                             onChange={change}
                                             value={(typeof formFields.armorType !== 'undefined') ? formFields.armorType : null}
                                />
                                }
                            </FormGroup>
                        </div>
                    }

                    {(isAddingNew || hasSelectedArmor) &&
                    <div>
                        <FormGroup widths='equal'>
                            <Form.Input placeholder='Armor Amount...'
                                        name='armorAmount'
                                        label='Armor Amount'
                                        onChange={change}
                                        value={formFields.armorAmount || 0}
                            />
                            {brandNameList &&
                            <Form.Select label='Brand'
                                         placeholder='Select Brand...'
                                         name='armorBrandName'
                                         options={brandNameList.toJS()}
                                         value={formFields.armorBrandName || null}
                                         onChange={change}
                            />
                            }
                            <Form.Input placeholder='Max number of attributes...'
                                        name='armorAttributeLimit'
                                        label='Max # of Attributes'
                                        onChange={change}
                                        value={formFields.armorAttributeLimit || 0}
                            />
                        </FormGroup>

                        <FormGroup>
                            <FormList inverted>
                                {formFields.armorPossibleAttributes && formFields.armorPossibleAttributes.map((_attribute) => {
                                    return (<ListItem>
                                        <ListContent verticalAlign='middle'>{_attribute.modifier.stat}</ListContent>
                                    </ListItem>)
                                })}
                            </FormList>

                            // TODO: Get the list of armor attributes from the database.
                            // TODO: OR don't bother tracking them since they don't have unique identifiers.
                            //       Just create them on the fly as needed for now.
                            //       If this is the case, remove Attribute mode, reducer, and actions, and the collection in Firebase.
                            {/*<Form.Select label='Add Attribute'*/}
                            {/*/>*/}
                            <Button>Add Attribute</Button>
                        </FormGroup>

                        <Form.Button type='button' color='red' onClick={closeArmorModal}>Cancel</Form.Button>
                        <Form.Button color='green' content='Submit'/>
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
