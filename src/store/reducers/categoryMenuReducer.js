import * as actionTypes from "../actions/categoryMenuActionTypes";
import CategoryJson from "../../models/CategoryJson";

const initialState = {
    activeCatId: 1,
    activeCatName: null,
    activeSubMenu: new CategoryJson().getInitialMenu(),
    registerAdvFields: [],
    categoryJsonInstance: new CategoryJson(),
    isShowCategoryMenu: true
};

const categoryMenuReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.GETCATEGORYBYID: {
            const instance = state.categoryJsonInstance;
            const _subMenu = instance.getSubMenuWithParentAndReturnNode(action.payload);
            return {
                ...state,
                activeCatId: action.payload,
                activeSubMenu: _subMenu,
                registerAdvFields: [],
                activeCatName: null,
                isShowCategoryMenu: true
            };
        }
        case actionTypes.CLONECATEGORYSTRUCT: {
            const instance = state.categoryJsonInstance;
            const registerAdvFields = Object.assign({}, instance.getCategoryNode(action.payload));
            return {
                ...state,
                registerAdvFields: registerAdvFields,
                activeCatName: registerAdvFields._menuName,
                isShowCategoryMenu: false
            };
        }
        case actionTypes.SHOWCATEGORYMENU: {
            return {...state, isShowCategoryMenu: true}
        }
        case actionTypes.SENDADVERTISEMENT: {
            return {...state}
        }
        default:
            return state;
    }

};
export default categoryMenuReducer;
