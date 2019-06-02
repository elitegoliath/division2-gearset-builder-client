import React from 'react';
import './index.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { EquipmentCard } from '../../components/equipmentCard';
import { iAppState } from '../../state/reducers';
// import { changeNumTracker } from '../../state/actions/builder.actions';

export interface iBuilderPageProps {
    state: iAppState;
}

/**
 * Main Component
 * @param _props 
 */
export const BuilderPage = (_props: iBuilderPageProps) => {
    // Number stored in state.
    // const numVal = _props.builder.numTracker;

    // Function to change number in state.
    // const { changeNumTracker } = _props;

    // const clickPlus = () => {
    //     changeNumTracker(numVal + 1);
    //     console.log('Plus', numVal);
    // };

    // const clickMinus = () => {
    //     changeNumTracker(numVal - 1);
    //     console.log('Minus', numVal);
    // };

    // return (
    //     <div className='root'>
    //         <Button onClick={clickMinus}>-</Button>
    //         <NumberTracker num={numVal}></NumberTracker>
    //         <Button onClick={clickPlus}>+</Button>
    //     </div>
    // );
    const gearSet = _props.state.builderState.gearSet;

    return (
        <div className='root'>
            <EquipmentCard equipmentItem={gearSet.primaryWeapon}></EquipmentCard>
            <EquipmentCard equipmentItem={gearSet.secondaryWeapon}></EquipmentCard>
            <EquipmentCard equipmentItem={gearSet.sidearm}></EquipmentCard>
            <EquipmentCard equipmentItem={gearSet.mask}></EquipmentCard>
        </div>
    );
}

/**
 * Sub-components
 * @param _props 
 */
// const NumberTracker = (_props: any) => {
//     const {num} = _props;
//     return (
//         <div>{num}</div>
//     );
// }

/**
 * Connect state to props.
 * @param _state 
 */
const mapStateToProps = (_state: iAppState) => ({ state: { ..._state } });

/**
 * Map dispatchers to props.
 */
const mapDispatchToProps = (_dispatch: any) => bindActionCreators({

}, _dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BuilderPage);
