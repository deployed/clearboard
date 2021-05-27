import React, { useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const Zoom: React.FC = () => {
    const [zoomValue, setZoomValue] = useState<number>(100);

    return (
        <>
            <IconButton aria-label="delete" onClick={() => setZoomValue(zoomValue - 1)}>
                <RemoveIcon />
            </IconButton>
            <input
                type="number"
                value={zoomValue}
                onChange={(e) => setZoomValue(Number(e.target.value))}
            />
            %
            <IconButton aria-label="delete" onClick={() => setZoomValue(zoomValue + 1)}>
                <AddIcon />
            </IconButton>
        </>
    );
};

export default Zoom;
