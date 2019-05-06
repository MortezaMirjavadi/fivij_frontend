export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const SWITCHBETWEENLOGINREGISTER = "SWITCHBETWEENLOGINREGISTER";

export const login = (info) => ({type: LOGIN, payload: info});
export const register = (info) => ({type: REGISTER, payload: info});
export const swithBetweenLoginRegister = () => ({type: SWITCHBETWEENLOGINREGISTER});
