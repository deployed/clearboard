import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import SettingsIcon from '@material-ui/icons/Settings';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

import { CardContainer, CardTitle, Author, SettingsButton, CardContent, CardFooter, Votes } from './styles';

type CardProps = {
    author: string;
    text: string;
    numberOfVotes: number;
    coordinates: { x: number; y: number; };
    onVoteUp: () => void;
    onVoteDown: () => void;
    color: string;
    size: { width: number; height: number; };
}


const Card: React.FC<CardProps> = props => {
    const { author, text, numberOfVotes, color, coordinates, size } = props;
    const { onVoteUp, onVoteDown } = props;

    return (
        <CardContainer size={size} coordinates={coordinates}>
            <header>
                <CardTitle _color={color}>Created by</CardTitle>
                <Box m={1}>
                    <Author>{author}</Author>
                </Box>
                <SettingsButton color={color}>
                    <SettingsIcon />
                </SettingsButton>
            </header>
            <CardContent>
                <Typography>{text}</Typography>
            </CardContent>
            <CardFooter>
                <IconButton onClick={onVoteDown} aria-label="thumb-down">
                    <ThumbDownIcon fontSize="small"/>
                </IconButton>
                <Votes>{numberOfVotes}</Votes>
                <IconButton onClick={onVoteUp} aria-label="thumb-up">
                    <ThumbUpIcon fontSize="small"/>
                </IconButton>
            </CardFooter>
        </CardContainer>
    );
};

export default Card;
