import axios from 'axios';
import { FETCH_MESSAGES, ADD_MESSAGE } from '../types/messageTypes';

export const fetchMessages = () => async (dispatch) => {
    const result = await axios.get('/api/messages');

    dispatch({ type: FETCH_MESSAGES, payload: result.data });
};

export const addMessage = (message) => async (dispatch) => {
    dispatch({ type: ADD_MESSAGE, payload: message });
};
