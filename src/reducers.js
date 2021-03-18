import Types from './types';

const initialState={
    counter: 0,
};

export default function mainReducer(state= initialState, action)
{
    switch(action.type){
        case Types.INCREMENT:
            return {...state, 
                counter: state.counter + 1};

            case Types.DECREMENT:
                return {...state,
                     counter: state.counter - 1};

                default:
                    return state
    }
};