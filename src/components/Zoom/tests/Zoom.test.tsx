import { render, fireEvent } from '@testing-library/react';

import Zoom from '../Zoom';

describe('Zoom', () => {
    const zoomMockValue = 100;
    const setZoomValueMock = jest.fn();
    it('renders given component', () => {
        const { getByLabelText } = render(
            <Zoom value={zoomMockValue} setValue={setZoomValueMock} />
        );

        const result = getByLabelText('zoom-input');
        const htmlInput = result.firstChild as HTMLInputElement;

        expect(htmlInput.value).toEqual('100');
    });

    it('delete one click check', () => {
        const { getByLabelText } = render(
            <Zoom value={zoomMockValue} setValue={setZoomValueMock} />
        );

        const removeBtn = getByLabelText('delete');
        fireEvent(
            removeBtn,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        );

        expect(setZoomValueMock).toHaveBeenCalledWith(zoomMockValue - 1);
    });

    it('add one click check', () => {
        const { getByLabelText } = render(
            <Zoom value={zoomMockValue} setValue={setZoomValueMock} />
        );

        const removeBtn = getByLabelText('add');
        fireEvent(
            removeBtn,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        );

        expect(setZoomValueMock).toHaveBeenCalledWith(zoomMockValue + 1);
    });
});
