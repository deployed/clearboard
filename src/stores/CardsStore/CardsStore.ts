import { makeObservable, observable, action } from 'mobx';
import { Card } from './types';


export default class CardsStore {
    public cards: Card[] = [];

    constructor() {
        makeObservable(this, {
            cards: observable,
            addCard: action,
        });
    }

    addCard(card: Card): void {
        this.cards.push(card);
    }
}