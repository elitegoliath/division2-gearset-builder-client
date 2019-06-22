import React from 'react'
import { Modal, Button, Form, FormGroup } from 'semantic-ui-react';

export const ArmorModal = () => {
    const handleSubmit = () => {

    }

    return (
        <Modal basic trigger={<Button size='mini'>Armor Modal</Button>}>
            <Modal.Content>
                <Form inverted onSubmit={handleSubmit}>
                    <FormGroup widths='equal'>
                        <Form.Input placeholder='Armor Model...' name='model' label='Weapon Model' />
                        <Form.Select placeholder='Armor Type...' name='type' options={typeOptions} label='Weapon Type' />
                    </FormGroup>
                </Form>
            </Modal.Content>
        </Modal>
    )
}