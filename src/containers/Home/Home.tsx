import { Container } from 'components/Layout';
import * as React from 'react';
import { Login } from './Auth/components/LoginForm';

const Home: React.FC = () => {
    return (
        <Container fullScreen center>
            <Login />
        </Container>
    );
};

export default Home;
