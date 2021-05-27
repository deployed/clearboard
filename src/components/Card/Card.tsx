import React from 'react';

import {
    Box,
    Typography,
    IconButton
} from '@material-ui/core';

import { 
    Settings,
    ThumbDown,
    ThumbUp
} from '@material-ui/icons';

import { CardContainer, CardTitle, Author, SettingsButton, CardContent, CardFooter, Votes } from './styles';

import { CardProps } from './types';


const Card: React.FC<CardProps> = ({ author, text, numberOfVotes, color, coordinates, size, onVoteUp, onVoteDown }) => {
    return (
        <CardContainer size={size} coordinates={coordinates}>
            <header>
                <CardTitle _color={color}>Created by</CardTitle>
                <Box m={1}>
                    <Author>{author}</Author>
                </Box>
                <SettingsButton _color={color}>
                    <Settings />
                </SettingsButton>
            </header>
            <CardContent>
                <Typography>{text}</Typography>
            </CardContent>
            <CardFooter>
                <IconButton onClick={onVoteDown} aria-label="thumb-down">
                    <ThumbDown fontSize="small"/>
                </IconButton>
                <Votes>{numberOfVotes}</Votes>
                <IconButton onClick={onVoteUp} aria-label="thumb-up">
                    <ThumbUp fontSize="small"/>
                </IconButton>
            </CardFooter>
        </CardContainer>
    );
};

export default Card;
