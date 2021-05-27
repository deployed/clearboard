import styled from 'styled-components';
import InputBase from '@material-ui/core/InputBase';

export const ZoomInput = styled(InputBase)`
    && {
        color: rgb(256, 156, 44);
        text-decoration: none;
        margin: 0;
        padding: 0;
        border: none;
        color: black;
        text-align: center;

        .MuiInputBase-input {
            text-align: center;
            &::-webkit-outer-spin-button,
            &::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            -moz-appearance: textfield;
        }

        &:focus {
            outline: none;
        }
    }
`;
export const ZoomWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
    border: 1px solid gray;
`;

export const ZoomInputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
