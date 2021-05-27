import AuthStore from 'stores/AuthStore';
import CardsStore from 'stores/CardsStore';
import { Stores } from './types';

export default class AppStore {
    constructor(
        private readonly authStore = new AuthStore(),
        private readonly cardsStore = new CardsStore()
    ) {}

    get stores(): Stores {
        return {
            authStore: this.authStore,
            cardsStore: this.cardsStore
        };
    }
}