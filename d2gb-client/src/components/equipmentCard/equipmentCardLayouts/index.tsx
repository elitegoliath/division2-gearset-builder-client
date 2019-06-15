import React from 'react';
import './index.scss';
import { EquipmentItem } from '../../../models/equipment.model';
import { Image } from 'semantic-ui-react';

interface iEquipmentCardLayout {
    equipmentItem: EquipmentItem;
}

export const WeaponLayout = (_props: iEquipmentCardLayout) => {
    const { equipmentItem } = _props;

    return (
        <div className='equipment-card-layout'>

            <div className='equipment-card-layout__gear-icon'>
                <Image src={equipmentItem.iconURL} size='tiny' verticalAlign='middle' />
            </div>
        </div>
    );
};

export const ArmorLayout = (_props: iEquipmentCardLayout) => {
    const { equipmentItem } = _props;

    return (
        <div className='equipment-card-layout'>

            <div className='equipment-card-layout__gear-icon'>
                <Image src={equipmentItem.iconURL} size='tiny' verticalAlign='middle' />
            </div>
        </div>
    );
};

export const GadgetLayout = (_props: iEquipmentCardLayout) => {
    const { equipmentItem } = _props;

    return (
        <div className='equipment-card-layout'>

            <div className='equipment-card-layout__gear-icon'>
                <Image src={equipmentItem.iconURL} size='tiny' />
            </div>
        </div>
    );
};
