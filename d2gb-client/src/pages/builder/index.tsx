import React from 'react';
import './index.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { EquipmentCard } from '../../components/equipmentCard';
import { iAppState } from '../../state/reducers';

/**
 * Props interface for the Builder Page.
 */
export interface iBuilderPageProps {
    state: iAppState;
}

/**
 * Main Component
 * @param _props 
 */
export const BuilderPage = (_props: iBuilderPageProps) => {
    const gearSet = _props.state.builderState.gearSet;

    return (
        <div className='builder-page-root'>
            <div className='set-card__container'>
                <div className='set-card__row'>
                    <EquipmentCard equipmentItem = { gearSet.primaryWeapon }></EquipmentCard>
                    <EquipmentCard equipmentItem = { gearSet.secondaryWeapon }></EquipmentCard>
                    <EquipmentCard equipmentItem = { gearSet.sidearm }></EquipmentCard>
                </div>
                <div className='set-card__row'>
                    <EquipmentCard equipmentItem = { gearSet.mask }></EquipmentCard>
                    <EquipmentCard equipmentItem = { gearSet.backpack }></EquipmentCard>
                </div>
                <div className='set-card__row'>
                    <EquipmentCard equipmentItem = { gearSet.chest }></EquipmentCard>
                    <EquipmentCard equipmentItem = { gearSet.gloves }></EquipmentCard>
                </div>
                <div className='set-card__row'>
                    <EquipmentCard equipmentItem = { gearSet.holster }></EquipmentCard>
                    <EquipmentCard equipmentItem = { gearSet.kneepads }></EquipmentCard>
                </div>
                <div className='set-card__row'>
                    <EquipmentCard equipmentItem = { gearSet.firstGadget }></EquipmentCard>
                    <EquipmentCard equipmentItem = { gearSet.secondGadget }></EquipmentCard>
                </div>
            </div>
        </div>
    );
};

/**
 * Connect state to props.
 */
const mapStateToProps = (_state: iAppState) => ({ state: { ..._state } });

/**
 * Map dispatchers to props.
 */
const mapDispatchToProps = (_dispatch: any) => bindActionCreators({

}, _dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BuilderPage);
