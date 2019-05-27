import { FETCH_BOXES } from './types';

export default (state, action) => {
    switch(action.type) {
        case FETCH_BOXES: {
            return action.payload
        }    
        default:
            return state    
    }
}