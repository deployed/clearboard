import { useParams } from 'react-router';
import useStore from 'hooks/useStore';
import { observer } from 'mobx-react';

import NoteAddIcon from '@material-ui/icons/NoteAdd';


const Board: React.FC = () => {
    const { boardId } = useParams<{ boardId: string }>();
    const { cardsStore } = useStore();

    const handleAddCard = () => {
        // Temporary passing some default values
        cardsStore.addCard({
            id: Math.floor(Math.random()*10000),
            author: 'John Doe',
            text: 'Lorem ipsum',
            numberOfVotes: 0,
            coordinates: { x: 0, y: 0 },
            size: { width: 200, height: 260 },
            color: '#038cfc'
        });
    };

    // Will be passed to LeftSidePanel
    const buttons = [
        {
            onClick: handleAddCard,
            icon: NoteAddIcon,
            hoverElement: null
        }
    ];

    return (
        <>
            <div>
                board: {boardId}
                <canvas id='boardCanvas' />
            </div>
        </>
    );
};

export default observer(Board);
