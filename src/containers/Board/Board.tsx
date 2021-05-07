import { useParams } from 'react-router'

const Board = () => {

  const { boardId } = useParams<{ boardId: string }>();
  console.log('asd')
  return (
    <div>
      board: { boardId}
    </div>
  )
}

export default Board
