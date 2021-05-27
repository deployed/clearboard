import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import Typography from '@material-ui/core/Typography';

import { CardContainer, CardTitle, SettingsButton, CardFooter } from './styles';

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

    return (
        <CardContainer size={size} coordinates={coordinates}>
            <header>
                <CardTitle _color={color}>Created by</CardTitle>
                <Typography>{author}</Typography>
                <SettingsButton color={color}>
                    <SettingsIcon />
                </SettingsButton>
            </header>
            <Typography>{text}</Typography>
            <CardFooter>
                <button>-</button>
                {numberOfVotes}
                <button>+</button>
            </CardFooter>
        </CardContainer>
    );
};

export default Card;
