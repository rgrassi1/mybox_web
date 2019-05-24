import { FETCH_BOXES } from './types';

export default (state, action) => {
    switch(action.type) {
        case FETCH_BOXES: {
            //console.log(action.payload)
            return action.payload
        }    
        default:
            return state    
    }
}