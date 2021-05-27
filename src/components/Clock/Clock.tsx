import * as React from 'react';
import { Button } from '@material-ui/core';
//useState
const clockObject = {
    hours: 0,
    minuts: 0
};

const Clock: React.FC = () => {
    return (
        <>
            <Button variant="contained" style={{ 'borderRadius': '100px' , 'padding': '5px' }}>-</Button> 
            <Button variant="contained" style={{ 'borderRadius': '100px', 'padding': '5px' }}>+</Button>
        </>
    );
};

export default Clock;