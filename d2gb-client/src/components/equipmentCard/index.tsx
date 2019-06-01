import React from 'react';
import './index.scss';
import { tEquipmentType } from '../../types/gear.types';

interface iGearCardProps {
    equipmentType: tEquipmentType,
};

export const EquipmentCard = (_props: iGearCardProps) => {
    return (
        <div className='root'>
            {_props.equipmentType}
        </div>
    );
};
