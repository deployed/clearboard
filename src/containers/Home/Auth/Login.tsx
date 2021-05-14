import styled from 'styled-components';
import { useFormik } from 'formik';
import { Button, TextField } from '@material-ui/core';
import { Container } from 'components/Layout';

const Form = styled.form`
    display: flex;
`;

const Login: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
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
