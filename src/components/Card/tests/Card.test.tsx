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
    it('renders component with author', () => {
        const { getByText } = render(<Card {...props} />);
  
        const result = getByText(defaultProps.author);

        expect(result).toBeTruthy();
    });

    it('renders component with text', () => {
        const { getByText } = render(<Card {...props} />);
  
        const result = getByText(defaultProps.text);

        expect(result).toBeTruthy();
    });

    it('renders component with number fo votes', () => {
        const { getByText } = render(<Card {...props} />);
  
        const result = getByText(defaultProps.numberOfVotes);

        expect(result).toBeTruthy();
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
