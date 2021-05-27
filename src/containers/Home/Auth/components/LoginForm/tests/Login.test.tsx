import { fireEvent, render } from '@testing-library/react';

import Login from '../Login';

const mockPush = jest.fn();

jest.mock('react-router-dom', () =>({
    useHistory: ()=> ({ push: mockPush })
}));

describe('Login', () => {
    it('renders given login component', async () => {
        const { getByText } = render(<Login/>);
  
        const loginText = getByText('Login:');
        const registerText = getByText('Hasło:');
        const buttonText = getByText('ok');
        const registerLink = getByText('Register');

        expect(loginText).toBeTruthy();
        expect(registerText).toBeTruthy();
        expect(buttonText).toBeTruthy();
        expect(registerLink).toBeTruthy();
    });

    it('navigate to register', async () =>{

        const { getByText } = render(<Login/>);
        const registerLink = getByText('Register');

        fireEvent.click(registerLink);
        expect(mockPush).toHaveBeenCalled();
        expect(mockPush).toHaveBeenCalledWith('/register');
    });


});