import { Zoom } from '..';

export default {
    title: '/Zoom',
    decorators: [],
};

export const HalfScreen: React.FC = () => (
    <div style={{ height: '100vh' }}>
        <Zoom />
    </div>
);
