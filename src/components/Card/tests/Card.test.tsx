import { render, fireEvent } from '@testing-library/react';

import Card from '..';

const defaultProps = {
    author: 'John Doe',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.', 
    numberOfVotes: 42,
    onVoteUp: jest.fn(),
    onVoteDown: jest.fn(),
    coordinates: { x: 0, y: 0 },
    size: { width: 200, height: 260 },
    color: '#038cfc',
};

let props = defaultProps;

beforeEach(() => {
    props = { ...defaultProps };
});

describe('Card', () => {
    it('renders component', () => {
        const { getByText } = render(<Card {...props} />);

        expect(getByText(defaultProps.author)).toBeTruthy();
        expect(getByText(defaultProps.text)).toBeTruthy();
        expect(getByText(defaultProps.numberOfVotes)).toBeTruthy();
    });

    it('calls onVoteDown function if corresponding button clicked', () => {
        props.onVoteDown = jest.fn();
        const { getByRole } = render(<Card {...props} />);
  
        fireEvent.click(getByRole('button', { name: /thumb-down/i }));

        expect(props.onVoteDown).toHaveBeenCalledTimes(1);
    });

    it('calls onVoteUp function if corresponding button clicked', () => {
        props.onVoteUp = jest.fn();
        const { getByRole } = render(<Card {...props} />);
  
        fireEvent.click(getByRole('button', { name: /thumb-up/i }));

        expect(props.onVoteUp).toHaveBeenCalledTimes(1);
    });
});
