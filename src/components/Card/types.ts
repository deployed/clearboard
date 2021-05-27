export type CardProps = {
    author: string;
    text: string;
    numberOfVotes: number;
    coordinates: Position;
    onVoteUp: () => void;
    onVoteDown: () => void;
    color: string;
    size: Size;
}

export type CardContainerProps = {
    coordinates: Position;
    size: Size;
}