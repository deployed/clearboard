import styled from 'styled-components';
import { useFormik } from 'formik';
import { Button, TextField } from '@material-ui/core';
import { Container } from 'components/Layout';
import { useHistory } from 'react-router-dom';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 300px;
`;

const Login: React.FC = () => {
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
            history.push('/dashboard');
        }
    });
    
    return (
        <Container center>
            <Form onSubmit={formik.handleSubmit}>
                <TextField
                    name="username"      
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    label="Login"
                />   
                <TextField
                    name="password" 
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    label="Password"
                    type="password"
                />
                <Button type="submit">Login</Button>
            </Form>
        </Container>
    );
};

export default Login;
