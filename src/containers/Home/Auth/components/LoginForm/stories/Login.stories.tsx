import { Login } from '..';
import { StyleProvider } from 'providers';
export default {
    title: 'Auth/login',
    decorators: [],
};

export const NoProps: React.FC = () => (
    <StyleProvider>
        <Login/>
    </StyleProvider>
);