import React from 'react';
import './index.scss';
import { Image } from 'semantic-ui-react';
import { Weapon } from '../../../models/weapon.model';
import { Armor } from '../../../models/armor.model';
import { Gadget } from '../../../models/gadget.model';

// interface iEquipmentCardLayout {
//     equipmentItem: tEquipmentItem;
// }

interface iWeaponLayout {
    weaponModel: Weapon;
}

export const WeaponLayout = (_props: iWeaponLayout) => {
    const { weaponModel } = _props;

    return (
        <div className='equipment-card-layout'>

            <div className='equipment-card-layout__gear-icon'>
                <Image src={weaponModel.iconURL} size='tiny' verticalAlign='middle' />
            </div>
        </div>
    );
};

interface iArmorLayout {
    armorModel: Armor;
}

export const ArmorLayout = (_props: iArmorLayout) => {
    const { armorModel } = _props;

    return (
        <div className='equipment-card-layout'>

            <div className='equipment-card-layout__gear-icon'>
                <Image src={armorModel.iconURL} size='tiny' verticalAlign='middle' />
            </div>
        </div>
    );
};

interface iGadgetLayout {
    gadgetModel: Gadget;
}

export const GadgetLayout = (_props: iGadgetLayout) => {
    const { gadgetModel } = _props;

    return (
        <div className='equipment-card-layout'>

            <div className='equipment-card-layout__gear-icon'>
                <Image src={gadgetModel.iconURL} size='tiny' />
            </div>
        </div>
    );
};
