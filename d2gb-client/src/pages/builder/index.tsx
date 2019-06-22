import React from 'react'
import './index.scss'
import { connect } from 'react-redux'
import { EquipmentCard } from '../../components/equipmentCard'
import { iAppState } from '../../state/reducers'
import { iBuilderState } from '../../state/reducers/builder.reducer'
import { GearSet } from '../../models/gearSet.model'
import { OPEN_EQUIPMENT_EDITOR } from '../../state/actions/builder.actions'
import { WeaponLayout, ArmorLayout, GadgetLayout } from '../../components/equipmentCard/equipmentCardLayouts'
import { Weapon } from '../../models/weapon.model'
import { Armor } from '../../models/armor.model'
import { Gadget } from '../../models/gadget.model'

/**
 * Props interface for the Builder Page.
 */
export interface iBuilderPageProps {
    builderState?: iBuilderState
    openEditor?: any
}

/**
 * Main Component
 * @param _props 
 */
export const BuilderPage = (_props: iBuilderPageProps) => {
    const gearSet: GearSet = _props.builderState.gearSet

    return (
        <div className='builder-page-root'>
            <div className='set-card__container'>
                <div className='set-card__row'>
                    {setWeaponCard(gearSet.primaryWeapon, _props.openEditor)}
                    {setWeaponCard(gearSet.secondaryWeapon, _props.openEditor)}
                    {setWeaponCard(gearSet.sidearm, _props.openEditor)}
                </div>
                <div className='set-card__row'>
                    {setArmorCard(gearSet.mask, _props.openEditor)}
                    {setArmorCard(gearSet.backpack, _props.openEditor)}
                </div>
                <div className='set-card__row'>
                    {setArmorCard(gearSet.chest, _props.openEditor)}
                    {setArmorCard(gearSet.gloves, _props.openEditor)}
                </div>
                <div className='set-card__row'>
                    {setArmorCard(gearSet.holster, _props.openEditor)}
                    {setArmorCard(gearSet.kneepads, _props.openEditor)}
                </div>
                <div className='set-card__row'>
                    {setGadgetCard(gearSet.firstGadget, _props.openEditor)}
                    {setGadgetCard(gearSet.secondGadget, _props.openEditor)}
                </div>
            </div>
        </div>
    );
};

const setWeaponCard = (_weapon: Weapon, _dispatchFunc: any) => {
    const handleClick = () => {
        _dispatchFunc(_weapon)
    }

    return (
        <div onClick={ handleClick }>
            <EquipmentCard>
                <WeaponLayout weaponModel={ _weapon }></WeaponLayout>
            </EquipmentCard>
        </div>
    )
}

const setArmorCard = (_armor: Armor, _dispatchFunc: any) => {
    const handleClick = () => {
        _dispatchFunc(_armor)
    }

    return (
        <div onClick={handleClick}>
            <EquipmentCard>
                <ArmorLayout armorModel={_armor}></ArmorLayout>
            </EquipmentCard>
        </div>
    )
}

const setGadgetCard = (_gadget: Gadget, _dispatchFunc: any) => {
    const handleClick = () => {
        _dispatchFunc(_gadget)
    }

    return (
        <div onClick={handleClick}>
            <EquipmentCard>
                <GadgetLayout gadgetModel={_gadget}></GadgetLayout>
            </EquipmentCard>
        </div>
    )
}

/**
 * Connect state to props.
 */
const mapStateToProps = (_state: iAppState) => ({
        builderState: _state.builderState,
    });

/**
 * Map dispatchers to props.
 */
const mapDispatchToProps = (_dispatch: any) => ({
    openEditor: (_item: Armor | Weapon | Gadget) => _dispatch({ type: OPEN_EQUIPMENT_EDITOR, payload: _item })
});

export default connect(mapStateToProps, mapDispatchToProps)(BuilderPage);
