export const GETCATEGORYBYID = "GETCATEGORYBYID";
export const CLONECATEGORYSTRUCT = "CLONECATEGORYSTRUCT";
export const SHOWCATEGORYMENU = "[RegisterAdv] SHOWCATEGORYMENU";
export const SENDADVERTISEMENT = "[RegisterAdv] SENDADVERTISEMENT";
export const GETCURRENTFILTER = "[RegisterAdv] GetCurrentFilter";

export const getCategoryById = (id) => ({type: GETCATEGORYBYID, payload: id});
export const cloneCategoryStruct = (id) => ({type: CLONECATEGORYSTRUCT, payload: id});
export const showCategoryMenu = () => ({type: SHOWCATEGORYMENU});
export const sendAdvertisement = () => ({type: SENDADVERTISEMENT});
export const getCurrentFilter = (id) => ({type: GETCURRENTFILTER, payload: id});
