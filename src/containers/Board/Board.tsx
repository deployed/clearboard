import { useParams } from 'react-router';

const Board: React.FC = () => {
    const { boardId } = useParams<{ boardId: string }>();
    console.log('asd');
    return (
        <div>
            <div>
      board: { boardId}
            </div>
        </div>
    );
};

export default Board;
