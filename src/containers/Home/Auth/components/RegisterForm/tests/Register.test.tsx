import { render } from '@testing-library/react';
import Register from '../Register';


describe('Register', () => {
    it('renders given register component', async () => {
        const { getByText } = render(<Register/>);
  
        const loginText = getByText('Login:');
        const passwordText = getByText('Hasło:');
        const confirmPasswordText = getByText('Potwierdź hasło:');
        const registerLink = getByText('register');

        expect(loginText).toBeTruthy();
        expect(passwordText).toBeTruthy();
        expect(confirmPasswordText).toBeTruthy();
        expect(registerLink).toBeTruthy();
    });

});