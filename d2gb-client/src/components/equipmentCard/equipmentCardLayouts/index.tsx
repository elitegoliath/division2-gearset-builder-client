import React from 'react';
import './index.scss';
import { EquipmentItem } from '../../../models/equipment.model';

interface iEquipmentCardLayout {
    equipmentItem: EquipmentItem;
}

const openGearCustomizer = () => {
    console.log('Item Clicked');
};

export const WeaponLayout = (_props: iEquipmentCardLayout) => {
    const { equipmentItem } = _props;

    return (
        <div className='equipment-card-layout-root'>Weapon</div>
    );
};

export const ArmorLayout = (_props: iEquipmentCardLayout) => {
    const { equipmentItem } = _props;

    return (
        <div className='equipment-card-layout-root' onClick={ () => { openGearCustomizer() } }>Armor</div>
    );
};

export const GadgetLayout = (_props: iEquipmentCardLayout) => {
    const { equipmentItem } = _props;

    return (
        <div className='equipment-card-layout-root'>Gadget</div>
    );
};
