import { render } from '@testing-library/react';

import Clock from '../Clock';

describe('Clock', () => {
    it('renders given component', async () => {
        const { getByText } = render(<Clock />);
  
        const result = await getByText('00 : 00');

        expect(result).toBeTruthy();
    });
});