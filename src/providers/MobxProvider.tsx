import { Provider } from 'mobx-react';

import AppStore from 'stores';

const MobXProvider: React.FC = ({ children }) => (
    <Provider {...AppStore.stores}>
        {children}
    </Provider>
);

export default MobXProvider;
