import { Register } from '..';
import { StyleProvider } from 'providers';

export default {
    title: 'Auth/register',
    decorators: [],
};

export const NoProps: React.FC = () => (
    <StyleProvider>
        <Register/>
    </StyleProvider>
);