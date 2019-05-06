import * as actionTypes from "../actions/categoryMenuActionTypes";
import CategoryJson from "../../models/CategoryJson";

const initialState = {
    activeCatId: 1,
    activeCatName: null,
    activeSubMenu: new CategoryJson().getInitialMenu(),
    registerAdvFields: [],
    categoryJsonInstance: new CategoryJson(),
    isShowCategoryMenu: true,
    currentFilter: []
};

const categoryMenuReducer = (state = initialState, action) => {
    const instance = state.categoryJsonInstance;
    switch (action.type) {
        case actionTypes.GETCATEGORYBYID: {
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
        case actionTypes.GETCURRENTFILTER: {
            return {...state, currentFilter: instance.getCategoryFilter(action.payload)}
        }
        default:
            return state;
    }

};
export default categoryMenuReducer;
