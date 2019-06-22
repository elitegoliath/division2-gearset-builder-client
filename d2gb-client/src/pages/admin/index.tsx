import React from 'react'
import './index.scss'
import { Button, Modal, Form, Segment, FormGroup } from 'semantic-ui-react';
import { Weapon } from '../../models/weapon.model';
import { eWeaponType } from '../../constants';

export const AdminPage = () => {
    return (
        <div className='admin-page'>
            <div className='admin-page__data-input-buttons'>
                <div className='admin-page__button'>
                    {weaponModal()}
                </div>

                {/* <div className='admin-page__button'>
                    <Button size='mini'>Weapon Mod Modal</Button>
                </div> */}

                <div className='admin-page__button'>
                    <Button size='mini'>Armor Modal</Button>
                </div>

                {/* <div className='admin-page__button'>
                    <Button size='mini'>Armor Mod Modal</Button>
                </div> */}

                <div className='admin-page__button'>
                    <Button size='mini'>Gadget Modal</Button>
                </div>

                {/* <div className='admin-page__button'>
                    <Button size='mini'>Gadget Mod Modal</Button>
                </div> */}
            </div>
        </div>
    )
}

const weaponModal = () => {
    const typeOptions: {key: number, text: string, value: number}[] = [
        { key: eWeaponType.Rifle , text: eWeaponType[eWeaponType.Rifle], value: eWeaponType.Rifle},
    ]

    const handleSubmit = () => {

    }

    return (
        <Modal basic trigger={<Button size='mini'>Weapon Modal</Button>}>
            <Modal.Content>
                <Segment inverted>
                    <Form inverted onSubmit={handleSubmit}>
                        <FormGroup widths='equal'>
                            <Form.Input placeholder='Weapon Model...' name='model' label='Weapon Model' />
                            <Form.Select placeholder='Weapon Type...' name='type' options={typeOptions} label='Weapon Type' />
                        </FormGroup>
                    </Form>
                </Segment>
            </Modal.Content>
        </Modal>
    )
}