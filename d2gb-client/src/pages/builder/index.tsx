import React from 'react';
import './index.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { changeNumTracker } from '../../state/actions/builder.actions';

/**
 * Main Component
 * @param _props 
 */
export const BuilderPage : React.FC = (_props: any) => {
    // Number stored in state.
    const numVal = _props.builder.numTracker;

    // Function to change number in state.
    const { changeNumTracker } = _props;

    const clickPlus = () => {
        changeNumTracker(numVal + 1);
        console.log('Plus', numVal);
    };

    const clickMinus = () => {
        changeNumTracker(numVal - 1);
        console.log('Minus', numVal);
    };

    return (
        <div className='root'>
            <Button onClick={clickMinus}>-</Button>
            <NumberTracker num={numVal}></NumberTracker>
            <Button onClick={clickPlus}>+</Button>
        </div>
    );
}

/**
 * Sub-components
 * @param _props 
 */
const NumberTracker = (_props: any) => {
    const {num} = _props;
    return (
        <div>{num}</div>
    );
}

/**
 * Connect state to props.
 * @param _state 
 */
const mapStateToProps = (_state: any) => ({..._state});

/**
 * Map dispatchers to props.
 */
const mapDispatchToProps = (_dispatch: any) => bindActionCreators({
    changeNumTracker,
}, _dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BuilderPage);
