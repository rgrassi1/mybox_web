import api from '../services/api';
import { FETCH_BOXES } from '../reducer/types'

export const fetchBoxes = async(dispatch) => {
    const response = await api.get('/boxes');
    dispatch({ type: FETCH_BOXES, payload: response.data })
} 