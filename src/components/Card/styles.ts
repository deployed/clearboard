import styled from 'styled-components';
import {
    Typography,
    Paper,
    IconButton
} from '@material-ui/core';

import { CardContainerProps } from './types';


export const CardContainer = styled(Paper)<CardContainerProps>`
    position: absolute;
    left: ${({ coordinates }) => coordinates.x}px;
    top: ${({ coordinates }) => coordinates.y}px;
    width: ${({ size }) => size.width}px;
    height: ${({ size }) => size.height}px;

    overflow: hidden;
    display: flex;
    flex-direction: column;
`;

export const CardTitle = styled(Typography)<{ _color: string }>`
    background-color: ${({ _color }) => _color};
    margin: 0;
    padding: 0.5rem;
    color: white;
`;

export const Author = styled(Typography)`
    && {
        font-size: 0.9rem;
        color: gray;
    }
`;

export const CardContent = styled.div`
    flex: 1;
    padding: 0 0.5rem;
    overflow-y: auto;
`;

export const SettingsButton = styled(IconButton)<{ _color: string }>`
    && {
        background-color: ${({ _color }) => _color};
        padding: 10px;
        position: absolute;
        top: 0;
        right: 0;
        
        color: white;
        cursor: pointer;
        outline: none;
        border: none;
        box-shadow: -1px 1px 7px 2px rgba(0,0,0,0.27);
        border-radius: 5px;

        &:hover {
            background-color: ${({ _color }) => _color};
        }
    }
`;

export const CardFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
`;

export const Votes = styled(Typography)`
    && {
        font-size: 0.9rem;
        color: gray;
    }
`;
