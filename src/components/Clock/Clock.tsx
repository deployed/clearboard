import * as React from 'react';
import { Button } from '@material-ui/core';


const Clock: React.FC = () => {
    const [ clockObject, setClockObject ] = React.useState({   
        minuts: 0,
        seconds: 0,
    });

    React.useEffect(() => {
        setInterval(() => {setClockObject(tick);}, 1000);
    }, []);

    const zeroClock = () => setClockObject({   
        minuts: 0,
        seconds: 0,
    });
    const inc = () => setClockObject(increment);

    const dec = () => setClockObject(decrement);
    return (
        <>
            <Button variant="contained" style={{ 'borderRadius': '100px' , 'padding': '5px' }} onClick={dec}>
                -
            </Button> 
            <Button variant="contained" style={{ 'borderRadius': '100px', 'padding': '5px' }} onClick={inc}>
                +
            </Button>
        </>
    );
};

function increment(clockObject: { minuts: number; seconds: number; }) {
    clockObject.seconds += 10;
    if (clockObject.seconds >= 60){
        clockObject.seconds -= 60;
        clockObject.minuts += 1;
    }
    console.log('sa');
    return clockObject;
}


function decrement(clockObject: { minuts: number; seconds: number; }) {
    clockObject.seconds -= 10;
    if (clockObject.seconds < 0){
        clockObject.seconds += 60;
        clockObject.minuts -= 1;
    }
    if(clockObject.minuts < 0)
    {
        clockObject.seconds = 0;
        clockObject.minuts = 0;
    }
    console.log('ac');
    return clockObject;
}

function tick(clockObject: { minuts: number; seconds: number; }) {
    if(clockObject.seconds < 60 ){
        clockObject.seconds += 1;
    }else if (clockObject.seconds == 60){
        clockObject.minuts += 1;
        clockObject.seconds = 0;
    }
    console.log(clockObject);
    return clockObject;
}
  


export default Clock;
