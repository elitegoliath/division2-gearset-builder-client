import React from 'react';
import './index.scss';
import { EquipmentItem, eArmorType } from '../../../models/equipment.model';
import { Image } from 'semantic-ui-react';

interface iEquipmentCardLayout {
    equipmentItem: EquipmentItem;
}

// const iconList = {
//     Mask_Icon: require('../../../assets/images/Mask_Icon.png'),
// };

const openGearCustomizer = () => {
    console.log('Item Clicked');
};

// const equipmentIcon = (_imgURL: string) => {
//     console.log('URL', _imgURL);
//     if (_imgURL) {
//         return (
//             <div>
//                 <Image src={ iconList.Mask_Icon } size='tiny' />
//             </div>
//         );
//     }

//     return (<Image src={ iconList.Mask_Icon } size='tiny' />);
// };

export const WeaponLayout = (_props: iEquipmentCardLayout) => {
    // const { equipmentItem } = _props;

    return (
        <div className='equipment-card-layout-root'>Weapon</div>
    );
};

export const ArmorLayout = (_props: iEquipmentCardLayout) => {
    const { equipmentItem } = _props;

    return (
        <div className='equipment-card-layout-root' onClick={ 
            () => { openGearCustomizer() } 
        }>
            {/* { equipmentIcon(equipmentItem.icon) } */}
            <Image src={ equipmentItem.iconURL } />
        </div>
    );
};

export const GadgetLayout = (_props: iEquipmentCardLayout) => {
    // const { equipmentItem } = _props;

    return (
        <div className='equipment-card-layout-root'>Gadget</div>
    );
};
