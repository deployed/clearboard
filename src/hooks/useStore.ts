import * as React from 'react';
import { MobXProviderContext } from 'mobx-react';
import { Stores } from 'stores/AppStore/types';

export default function useStore(): Stores {
    return React.useContext<Stores>(MobXProviderContext as unknown as React.Context<Stores>);
}