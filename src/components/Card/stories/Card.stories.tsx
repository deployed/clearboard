import Card from '..';
import { action } from '@storybook/addon-actions';
 
export default {
    title: 'Card/Card',
    decorators: [],
};

export const DefaultCard: React.FC = () => (
    <Card 
        author="John Doe" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." 
        numberOfVotes={42} 
        onVoteUp={action('thumb up')}
        onVoteDown={action('humb down')}
        coordinates={{ x: 0, y: 0 }}
        size={{ width: 200, height: 260 }}
        color="#038cfc"
    />
);


export const SmallCard: React.FC = () => (
    <Card 
        author="John Doe" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." 
        numberOfVotes={12} 
        onVoteUp={action('thumb up')}
        onVoteDown={action('humb down')}
        coordinates={{ x: 0, y: 0 }}
        size={{ width: 160, height: 200 }}
        color="orange"
    />
);

export const PositionedCard: React.FC = () => (
    <Card 
        author="John Doe" 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor." 
        numberOfVotes={12} 
        onVoteUp={action('thumb up')}
        onVoteDown={action('humb down')}
        coordinates={{ x: 200, y: 40 }}
        size={{ width: 200, height: 260 }}
        color="#038cfc"
    />
);