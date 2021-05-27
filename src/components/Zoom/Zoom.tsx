import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { ZoomInput, ZoomWrapper, ZoomInputWrapper } from './zoom-styles';

interface ZoomProps {
    value: number;
    setValue: (n: number) => void;
}

const Zoom: React.FC<ZoomProps> = ({ value, setValue }) => {
    const inputHandler = (value: number): void => {
        if (value <= 200 && value >= 50) {
            setValue(value);
        }
    };

    const validateInput = (value: number): void => {
        if (value > 200) {
            setValue(200);
        }
        if (value < 50) {
            setValue(50);
        }
    };

    return (
        <ZoomWrapper>
            <IconButton size={'small'} aria-label="delete" onClick={() => inputHandler(value - 1)}>
                <RemoveIcon />
            </IconButton>

            <ZoomInputWrapper>
                <ZoomInput
                    type="number"
                    value={value}
                    aria-label="zoom-input"
                    onChange={(e) => setValue(Number(e.target.value))}
                    onBlur={(e) => validateInput(Number(e.target.value))}
                />
                %
            </ZoomInputWrapper>

            <IconButton size={'small'} aria-label="add" onClick={() => inputHandler(value + 1)}>
                <AddIcon />
            </IconButton>
        </ZoomWrapper>
    );
};

export default Zoom;
