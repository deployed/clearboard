import { render } from '@testing-library/react';
import { useState } from 'react';

import Zoom from '../Zoom';

describe('Navbar', () => {
    const [zoomValue, setZoomValue] = useState<number>(100);
    it('renders given component', async () => {
        const { getByText } = render(<Zoom zoomValue={zoomValue} setZoomValue={setZoomValue} />);

        const result = await getByText('Henlo');

        expect(result).toBeTruthy();
    });
});
