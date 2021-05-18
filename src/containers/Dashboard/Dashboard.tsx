import * as React from 'react';

const mockBoards = [
    {
        id: '1',
        photoImg: 'https://picsum.photos/200/300',
        name: 'Board 1'
    },
    {
        id: '2',
        photoImg: 'https://picsum.photos/200/300',
        name: 'Board 2'
    },
];

const Dashboard: React.FC = () => {
    return (
        <>
            {
                mockBoards.map((b) => (
                    <>
                        <img src={b.photoImg} />
                        {b.name}
                    </>
                ))
            }
        </>
    );
};

export default Dashboard;
