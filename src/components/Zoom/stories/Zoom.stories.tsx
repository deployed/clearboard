import { Zoom } from '..';
import React, { useState } from 'react';

export default {
    title: 'Zoom/Zoom',
    decorators: [],
};

export const RightValue: React.FC = () => {
    const [value, setValue] = useState<number>(100);
    return (
        <div style={{ height: '100vh' }}>
            <Zoom value={value} setValue={setValue} />
        </div>
    );
};
