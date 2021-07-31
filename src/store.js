import { createStore } from 'redux';
import { drink } from './reducers';

const defaultState = {
    name: 'tom',
    drink: 'water'
};

export const store = createStore(drink, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__);