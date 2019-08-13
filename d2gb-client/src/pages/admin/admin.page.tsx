import React from 'react'
import './index.scss'
import { Button, Modal, Form, Segment, FormGroup } from 'semantic-ui-react'
// import { Weapon } from '../../models/weapon.model'
import { eWeaponType, tFormSelectItem } from '../../constants'
import ArmorModal from './components/armorModal'
import { iAppState } from '../../state/reducers'
import { fetchArmorList } from '../../state/actions/armor.actions'
import { connect } from 'react-redux'
import { List } from 'immutable'
import { Armor } from '../../models/armor.model'
import { Brand } from '../../models/brand.model'
import { fetchBrandList } from '../../state/actions/brand.actions'

interface iAdminPage {
    armorList?: List<Armor>
    armorNameList?: List<tFormSelectItem>
    brandList?: List<Brand>
    brandNameList?: List<tFormSelectItem>
    fetchArmor?: any
    fetchBrands?: any
}

export const AdminPage = (_props: iAdminPage) => {
    const { armorList, armorNameList, brandList, brandNameList, fetchArmor, fetchBrands } = _props

    // console.log('Brand List', armorList)

    return (
        <div className='admin-page'>
            <div className='admin-page__data-input-buttons'>
                <div className='admin-page__button'>
                    {/* {weaponModal()} */}
                </div>

                {/* <div className='admin-page__button'>
                    <Button size='mini'>Weapon Mod Modal</Button>
                </div> */}

                <div className='admin-page__button'>
                    <ArmorModal armorList={armorList}
                        armorNameList={armorNameList}
                        brandList={brandList}
                        brandNameList={brandNameList}
                        fetchBrands={fetchBrands}
                        fetchArmor={fetchArmor}/>
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

const mapStateToProps = (_state: iAppState) => ({
    armorList: _state.armorState.armorList,
    armorNameList: _state.armorState.armorNameList,
    brandList: _state.brandState.brandList,
    brandNameList: _state.brandState.brandNameList,
})

/**
 * Map dispatchers to props.
 */
const mapDispatchToProps = (_dispatch: any) => ({
    fetchArmor: () => _dispatch(fetchArmorList()),
    fetchBrands: () => _dispatch(fetchBrandList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)

// const weaponModal = () => {
//     const typeOptions: {key: number, text: string, value: number}[] = [
//         { key: eWeaponType.Rifle , text: eWeaponType[eWeaponType.Rifle], value: eWeaponType.Rifle},
//     ]

//     const handleSubmit = () => {

//     }

//     return (
//         <Modal basic trigger={<Button size='mini'>Weapon Modal</Button>}>
//             <Modal.Content>
//                 <Segment inverted>
//                     <Form inverted onSubmit={handleSubmit}>
//                         <FormGroup widths='equal'>
//                             <Form.Input placeholder='Weapon Model...' name='model' label='Weapon Model' />
//                             <Form.Select placeholder='Weapon Type...' name='type' options={typeOptions} label='Weapon Type' />
//                         </FormGroup>
//                     </Form>
//                 </Segment>
//             </Modal.Content>
//         </Modal>
//     )
// }