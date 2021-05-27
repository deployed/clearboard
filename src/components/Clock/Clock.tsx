import * as React from 'react';
import { Button } from '@material-ui/core';

import { Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { ClockBox, TimeBox } from './styles';
import { ClockTimer } from './types';

const Clock: React.FC = () => {
    const [ clockObject, setClockObject ] = React.useState({   
        minutes: 0,
        seconds: 0,
    });
    const formatTime = (time : number) : string =>
    {
        
        // const formattedClockObject = clockObject;
        // console.log(formattedClockObject);
        // if (Number(formattedClockObject.minutes) < 10 && clockObject.minutes.length < 2) 
        // {
        //     formattedClockObject.minutes = `0${formattedClockObject.minutes}`;
        // }
        // if (Number(formattedClockObject.seconds) < 10 && formattedClockObject.seconds.length < 2) 
        // {
        //     formattedClockObject.seconds = `0${formattedClockObject.seconds}`;
        // }
    
        //console.log(formattedClockObject);
        //setClockObject(formattedClockObject);
       
        return `${String(time).length < 2 ? '0' : ''}${time}`;
    };

    function increment(time : number) {
 
        clockObject.seconds = clockObject.seconds + time;
       
        console.log('sa');
        setClockObject((prevState)=>{
            const seconds = prevState.seconds + time;
            if (seconds >= 60){
                prevState.seconds = seconds - 60;
                prevState.minutes = prevState.minutes + 1;
                return {
                    minutes : prevState.minutes,
                    seconds : 0
                };
            }
            return {
                minutes : prevState.minutes,
                seconds : prevState.seconds
            };
   
        });
        return clockObject;
    }
    
    
    function decrement() {
        clockObject.seconds -= 10;
        if (clockObject.seconds < 0){
            clockObject.seconds = clockObject.seconds + 60;
            clockObject.minutes =  clockObject.minutes -1;
        }
        if(clockObject.minutes < 0)
        {
            clockObject.seconds = 0;
            clockObject.minutes = 0;
        }
        console.log('ac');
        return clockObject;
    }
    
    function tick() {


        console.log(clockObject);
    
        increment(1);
        // setClockObject((prevState)=>{
        //     return {
        //         minutes : prevState.minutes,
        //         seconds : prevState.seconds + 1
        //     };
        // });
    }



    React.useEffect(() => {
        const intervalId = setInterval(() => {tick();}, 1000);
        return ()=>{
            clearInterval(intervalId);
        };
    });

    const zeroClock = () => setClockObject({   
        minutes: '0',
        seconds: '0',
    });
    const inc = () => setClockObject(increment(10));

    const dec = () => setClockObject(decrement());

    return (
        <ClockBox>
            <IconButton size="small" onClick={dec}><RemoveCircleOutlineIcon /></IconButton>
            <TimeBox component="span" m={1}> {formatTime(clockObject.minutes)} : {formatTime(clockObject.seconds)} </TimeBox>
            <IconButton size="small" onClick={inc}><AddCircleOutlineIcon /></IconButton>
        </ClockBox>

    );
};


  


export default Clock;
