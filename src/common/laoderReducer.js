import { Types } from ".";

const initialState = {
    loader: true
};

const laoderReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_LOADER:
            return {
                ...state,
                loader: action.payload,
            };
        default:
            return state;
    }
};

export default laoderReducer;