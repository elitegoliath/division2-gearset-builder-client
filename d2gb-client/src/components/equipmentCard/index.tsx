import React from 'react';
import './index.scss';

interface iGearCardProps {
    children?: any;
    openEditorFunc?: any;
};

export const EquipmentCard = (_props: iGearCardProps) => {
    const { openEditorFunc } = _props;

    return (
        <div className='equipment-card' onClick={openEditorFunc}>
            <div className='equipment-card__left-bar'></div>
            
            <div className='equipment-card__wrapper'>
                {_props.children}
            </div>
        </div>
    );
};
