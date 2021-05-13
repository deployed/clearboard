import AuthStore from 'stores/AuthStore';
import { Stores } from './types';

export default class AppStore {
    constructor(
    private readonly __authStore = new AuthStore()
    ) {}

    get stores(): Stores {
        return {
            authStore: this.__authStore
        };
    }
}