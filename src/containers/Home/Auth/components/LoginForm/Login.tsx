import styled from 'styled-components';
import { useFormik } from 'formik';
import { Button, TextField, Typography } from '@material-ui/core';
import { Container } from 'components/Layout';
import { useHistory } from 'react-router-dom';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 500px;
    border: 3px solid rgba(126, 186, 181, 1);
    border-radius: 10px;
    padding: 15px;
`;
const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    padding: 15px;
`;
const StyledTextField = styled(TextField)`
    width:80%;
    margin-left:10px;
    background-color: rgba(202, 240, 250, 0.2);
`;
const SubmitButton = styled(Button)`
    background-color:rgba(126, 186, 181, 1);
    width:20%;
    margin: auto;
    color: white;
    &:hover{
        background-color:rgba(126, 186, 181, 0.8);
    }
`;
const RegisterLink = styled(Button)`
    color: blue;
    margin:auto;
    text-decoration:underline;
    &:hover{
        background-color:white;
    }
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
                <Box>
                    <Typography>Login:</Typography>
                    <StyledTextField
                        variant="outlined"
                        name="username"      
                        onChange={formik.handleChange}
                        value={formik.values.username}
                    />
                </Box>
                <Box>
                    <Typography>Hasło:</Typography>
                    <StyledTextField
                        variant="outlined"
                        name="password" 
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        type="password"
                    />
                </Box>
                <SubmitButton type="submit">ok</SubmitButton>
                <RegisterLink onClick={()=>{history.push('/register');}}>Register</RegisterLink>
            </Form>
        </Container>
    );
};

export default Login;
