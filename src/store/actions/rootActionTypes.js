export const GETALLPOSTS = "GETALLPOSTS";
export const GETALLPOSTSSUCCESS = "GETALLPOSTSSUCCESS";
export const GETPOSTSFAILED = "GETPOSTSFAILED";

export const GETALLCITIES = '[Root] GETALLCITIES';
export const SELECTCITY = '[ROOT] SELECTCITY';

export const getPosts = () => ({type: GETALLPOSTS});
export const getPostsSuccess = (posts) => ({type: GETALLPOSTSSUCCESS, payload: posts});
export const getPostFailed = () => ({type: GETPOSTSFAILED});

export const getAllCities = () => ({type: GETALLCITIES});
export const selectCity = (city) => ({type: SELECTCITY, payload: city});
