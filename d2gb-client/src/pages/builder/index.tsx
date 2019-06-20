import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { EquipmentCard } from '../../components/equipmentCard';
import { iAppState } from '../../state/reducers';
import { iBuilderState } from '../../state/reducers/builder.reducer';
import { GearSet } from '../../models/gearSet.model';
import { OPEN_EQUIPMENT_EDITOR } from '../../state/actions/builder.actions';
import { tEquipmentItem } from '../../constants';
import { WeaponLayout } from '../../components/equipmentCard/equipmentCardLayouts';

/**
 * Props interface for the Builder Page.
 */
export interface iBuilderPageProps {
    builderState?: iBuilderState;
    openEditor?: any;
}

/**
 * Main Component
 * @param _props 
 */
export const BuilderPage = (_props: iBuilderPageProps) => {
    const gearSet: GearSet = _props.builderState.gearSet;
    const { openEditor } = _props;

    // const handleClick = (_model: tEquipmentItem) => {
    //     openEditor(_model);
    // };

    return (
        <div className='builder-page-root'>
            <div className='set-card__container'>
                <div className='set-card__row'>
                    {setEquipmentCard(gearSet.primaryWeapon, _props.openEditor)}
                    {setEquipmentCard(gearSet.secondaryWeapon, _props.openEditor)}
                    {setEquipmentCard(gearSet.sidearm, _props.openEditor)}
                    {/* <EquipmentCard openEditorFunc={ () => {handleClick(gearSet.primaryWeapon)} }>
                        <WeaponLayout weaponModel={gearSet.primaryWeapon}/>
                    </EquipmentCard> */}
                </div>
                <div className='set-card__row'>
                    {/* {setEquipmentCard(gearSet.mask, _props.openEditor)}
                    {setEquipmentCard(gearSet.backpack, _props.openEditor)} */}
                </div>
                <div className='set-card__row'>
                    {/* {setEquipmentCard(gearSet.chest, _props.openEditor)}
                    {setEquipmentCard(gearSet.gloves, _props.openEditor)} */}
                </div>
                <div className='set-card__row'>
                    {/* {setEquipmentCard(gearSet.holster, _props.openEditor)}
                    {setEquipmentCard(gearSet.kneepads, _props.openEditor)} */}
                </div>
                <div className='set-card__row'>
                    {/* {setEquipmentCard(gearSet.firstGadget, _props.openEditor)}
                    {setEquipmentCard(gearSet.secondGadget, _props.openEditor)} */}
                </div>
            </div>
        </div>
    );
};

const setWeaponCard = (weapon: Weapon, _dispatchFunc: any) => {
    const handleClick = () => {
        _dispatchFunc(_item);
    }

    return (
        <div onClick={ handleClick }>
            <EquipmentCard equipmentItem={ _item } />
        </div>
    );
}

/**
 * Connect state to props.
 */
const mapStateToProps = (_state: iAppState) => ({
        builderState: _state.builderState,
    });

/**
 * Map dispatchers to props.
 */
const mapDispatchToProps = (_dispatch: any) => ({
    openEditor: (_item: tEquipmentItem) => _dispatch({ type: OPEN_EQUIPMENT_EDITOR, payload: _item })
});

export default connect(mapStateToProps, mapDispatchToProps)(BuilderPage);
