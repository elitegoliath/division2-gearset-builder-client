import React from 'react';
import './index.scss';
import { Button } from 'semantic-ui-react';

export const BuilderPage : React.FC = () => {
    let numberTrack = 0;

    const clickPlus = () => {
        numberTrack++;
        console.log('Plus', numberTrack);
    };

    const clickMinus = () => {
        numberTrack--;
        console.log('Minus', numberTrack);
    };

    return (
        <div className='root'>
            <Button onClick={clickMinus}>-</Button>
            <NumberTracker num={numberTrack}></NumberTracker>
            {numberTrack}
            <Button onClick={clickPlus}>+</Button>
        </div>
    );
}

const NumberTracker = (_props: any) => {
    const {num} = _props;
    return (
        <div>{num}</div>
    );
}