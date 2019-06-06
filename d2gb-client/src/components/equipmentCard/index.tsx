import React from 'react';
import './index.scss';
import { eEquipmentCategory, EquipmentItem } from '../../models/equipment.model';
import { WeaponLayout, ArmorLayout, GadgetLayout } from './equipmentCardLayouts';

interface iGearCardProps {
    equipmentItem: EquipmentItem;
};

export const EquipmentCard = (_props: iGearCardProps) => {
    const { equipmentItem } = _props;

    return (
        <div className='equipment-card-root'>
            {(() => {
                switch (equipmentItem.category) {
                    case eEquipmentCategory.Weapon: 
                        return (<WeaponLayout equipmentItem={ equipmentItem }></WeaponLayout>);
                    case eEquipmentCategory.Armor: 
                        return (<ArmorLayout equipmentItem={ equipmentItem }></ArmorLayout>);
                    case eEquipmentCategory.Gadget: 
                        return (<GadgetLayout equipmentItem={ equipmentItem }></GadgetLayout>);
                }
            })()}
        </div>
    );
};
