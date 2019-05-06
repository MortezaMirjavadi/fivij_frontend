import * as actionTypes from "../actions/loginActionTypes";

const initialState = {
    isLogin: false,
    userInfo: null,
    isRegister: false
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SWITCHBETWEENLOGINREGISTER:
            return {...state, isRegister: !state.isRegister};
        default:
            return state;
    }
};

export default loginReducer;
