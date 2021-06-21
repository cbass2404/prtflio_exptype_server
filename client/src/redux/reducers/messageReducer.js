import { FETCH_MESSAGES, ADD_MESSAGE } from '../types/messageTypes';

/* eslint-disable import/no-anonymous-default-export */
export default function (state = [], action) {
    switch (action.type) {
        case FETCH_MESSAGES:
            return action.payload;
        case ADD_MESSAGE:
            return [...state, action.payload];
        default:
            return state;
    }
}
