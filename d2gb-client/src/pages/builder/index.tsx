import React from 'react';
import './index.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { EquipmentCard } from '../../components/equipmentCard';
import { iAppState } from '../../state/reducers';
import { iBuilderState } from '../../state/reducers/builder.reducer';
import { iImageURL, fetchIconURLs } from '../../state/actions/images.actions';
import { GearSet } from '../../models/gearSet.model';
import { iImageState } from '../../state/reducers/images.reducer';
import { List } from 'immutable';

/**
 * Props interface for the Builder Page.
 */
export interface iBuilderPageProps {
    builderState?: iBuilderState;
    imageState?: iImageState;
    getIconURLs?: any;
}

/**
 * Main Component
 * @param _props 
 */
export const BuilderPage = (_props: iBuilderPageProps) => {
    const gearSet: GearSet = _props.builderState.gearSet;
    const iconURLs: List<iImageURL> = _props.imageState.iconURLs;

    if (!iconURLs) {
        _props.getIconURLs();
    }

    return (
        <div className='builder-page-root'>
            <div className='set-card__container'>
                <div className='set-card__row'>
                    <EquipmentCard equipmentItem={ gearSet.primaryWeapon }></EquipmentCard>
                    <EquipmentCard equipmentItem={ gearSet.secondaryWeapon }></EquipmentCard>
                    <EquipmentCard equipmentItem={ gearSet.sidearm }></EquipmentCard>
                </div>
                <div className='set-card__row'>
                    <EquipmentCard equipmentItem={ gearSet.mask }></EquipmentCard>
                    <EquipmentCard equipmentItem={ gearSet.backpack }></EquipmentCard>
                </div>
                <div className='set-card__row'>
                    <EquipmentCard equipmentItem={ gearSet.chest }></EquipmentCard>
                    <EquipmentCard equipmentItem={ gearSet.gloves }></EquipmentCard>
                </div>
                <div className='set-card__row'>
                    <EquipmentCard equipmentItem={ gearSet.holster }></EquipmentCard>
                    <EquipmentCard equipmentItem={ gearSet.kneepads }></EquipmentCard>
                </div>
                <div className='set-card__row'>
                    <EquipmentCard equipmentItem={ gearSet.firstGadget }></EquipmentCard>
                    <EquipmentCard equipmentItem={ gearSet.secondGadget }></EquipmentCard>
                </div>
            </div>
        </div>
    );
};

// const setCardDefaults = (_set: GearSet, getImgFunc: any) => {
//     console.log('Defaults being set.');
//     // Check if images have been loaded.
//     Object.entries(_set).forEach(_card => {
//         const _cat = _card[0];
//         const _item = _card[1];
//         let newItem;

        
//     });
// };

/**
 * Connect state to props.
 */
const mapStateToProps = (_state: iAppState) => ({
        builderState: _state.builderState,
        imageState: _state.imageState,
    });

/**
 * Map dispatchers to props.
 */
const mapDispatchToProps = (_dispatch: any) => ({
    getIconURLs: () => _dispatch(fetchIconURLs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BuilderPage);
