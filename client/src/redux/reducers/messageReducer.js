import { FETCH_MESSAGES } from '../types/messageTypes';

/* eslint-disable import/no-anonymous-default-export */
export default function (state = [], action) {
    switch (action.type) {
        case FETCH_MESSAGES:
            return action.payload;
        default:
            return state;
    }
}
