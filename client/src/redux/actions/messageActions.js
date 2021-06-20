import axios from 'axios';
import { FETCH_MESSAGES } from '../types/messageTypes';

export const fetchMessages = () => async (dispatch) => {
    const result = await axios.get('/api/messages');

    dispatch({ type: FETCH_MESSAGES, payload: result.data });
};
