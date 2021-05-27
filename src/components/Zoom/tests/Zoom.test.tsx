import { render } from '@testing-library/react';

import Zoom from '../Zoom';

describe('Zoom', () => {
    const zoomMockValue = 100;
    const setZoomValueMock = jest.fn();
    it('renders given component', async () => {
        const { getByText } = render(<Zoom value={zoomMockValue} setValue={setZoomValueMock} />);

        const result = getByText('Henlo');

        expect(result).toBeTruthy();
    });
});
