import React from 'react';
import './index.scss';
import { eEquipmentCategory, EquipmentItem } from '../../models/equipment.model';

interface iGearCardProps {
    equipmentItem: EquipmentItem;
};

export const EquipmentCard = (_props: iGearCardProps) => {
    const { equipmentItem } = _props;

    return (
        <div className='root'>
            {equipmentLayout(equipmentItem.category)}
        </div>
    );
};

const equipmentLayout = (_category: number) => {
    switch(_category) {
        case eEquipmentCategory.Weapon: return (<div>Weapon</div>);
        case eEquipmentCategory.Armor: return (<div>Armor</div>);
        case eEquipmentCategory.Gadget: return (<div>Gadget</div>);
        default: return (<div>Default</div>);
    }
}
