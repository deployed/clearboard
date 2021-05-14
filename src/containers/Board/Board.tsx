import { useParams } from 'react-router';

const Board: React.FC = () => {
    const { boardId } = useParams<{ boardId: string }>();
    return (
        <>
            <div>
                board: {boardId}
                <canvas id="boardCanvas" />
            </div>
        </>
    );
};

export default Board;
