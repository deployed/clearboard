import styled from 'styled-components';
import { useFormik } from 'formik';
import { Button, TextField, Typography } from '@material-ui/core';
import { Container } from 'components/Layout';
import { useHistory } from 'react-router-dom';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 400px;
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
const StyledTypography = styled(Typography)`
    width:20%;
    text-align: center;
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
const Register: React.FC = () => {
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            password2: '',
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));
            history.push('/dashboard');
        }
    });
    
    return (
        <Container center fullScreen>
            <Form onSubmit={formik.handleSubmit}>
                <Box>
                    <StyledTypography>Login:</StyledTypography>
                    <StyledTextField
                        variant="outlined"
                        name="username"      
                        onChange={formik.handleChange}
                        value={formik.values.username}
                    />
                </Box>
                <Box>
                    <StyledTypography>Hasło:</StyledTypography>
                    <StyledTextField
                        variant="outlined"
                        name="password" 
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        type="password"
                    />
                </Box>
                <Box>
                    <StyledTypography>Potwierdź hasło:</StyledTypography>
                    <StyledTextField
                        variant="outlined"
                        name="password2"      
                        onChange={formik.handleChange}
                        value={formik.values.password2}
                        type="password"
                    />
                </Box>
                <SubmitButton type="submit">register</SubmitButton>
            </Form>
        </Container>
    );
};

export default Register;
