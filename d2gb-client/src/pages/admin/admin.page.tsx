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
import { Armor, Brand, Attribute } from '../../models'
import { fetchBrandList } from '../../state/actions/brand.actions'
import { fetchAttributeList } from '../../state/actions/attribute.actions'

interface iAdminPage {
    armorList?: List<Armor>
    armorNameList?: List<tFormSelectItem>
    brandList?: List<Brand>
    brandNameList?: List<tFormSelectItem>
    attributeList?: List<Attribute>
    fetchArmor?: Function
    fetchBrands?: Function
    fetchAttributes?: Function
}

export const AdminPage = (_props: iAdminPage) => {
    const { armorList, armorNameList, brandList, brandNameList, attributeList, fetchArmor, fetchBrands, fetchAttributes } = _props

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
    attributeList: _state.attributeState.attributeList,
})

/**
 * Map dispatchers to props.
 */
const mapDispatchToProps = (_dispatch: any) => ({
    fetchArmor: () => _dispatch(fetchArmorList()),
    fetchBrands: () => _dispatch(fetchBrandList()),
    fetchAttributes: () => _dispatch(fetchAttributeList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)
