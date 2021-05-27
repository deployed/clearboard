import Card from '..';

export default {
    title: 'Layouts/Card',
    decorators: [],
};

export const DefaultCard: React.FC = () => (
    <Card 
        author="John Doe" 
        text="Sample card text" 
        numberOfVotes={12} 
        onVoteUp={() => console.log('up')}
        onVoteDown={() => console.log('down')}
        coordinates={{ x: 0, y: 0 }}
        size={{ width: 200, height: 400 }}
        color="red"
    />
);