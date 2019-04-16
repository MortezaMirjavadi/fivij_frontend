import * as actionTypes from "../actions/rootActionTypes";

const initialState = {
    cities: [
        {id: 'c85915d6-591f-485c-a327-b8110c86aa30', name: 'Tehran', isActive: true},
        {id: 'aa53cae1-c275-419a-ba01-9f33bbe6ec1e', name: 'Rasht', isActive: false},
        {id: '882d4b9a-041f-4ad1-bf2c-52757cc0c124', name: 'Esfahan', isActive: false},
        {id: 'a3298546-2c25-48ce-b36a-288be768f005', name: 'Shiraz', isActive: false},
        {id: '411ca57a-5f5f-4bbd-976a-95a782119377', name: 'Sari', isActive: false},
        {id: 'a1128313-ab70-49fc-aaa9-8043d47e3ff1', name: 'Arak', isActive: false},
        {id: '9bca93cc-67c8-4595-81d3-2fbdabd76748', name: 'Birjand', isActive: false},
        {id: 'e4a96252-2cb9-4ba8-a059-8cd66c791464', name: 'Mashhad', isActive: false},
        {id: '20c89441-760e-4850-854e-1aad8a75ddd7', name: 'Hamedan', isActive: false},
        {id: 'e46aa6aa-c087-44c6-a29a-80d3a6d0d1b3', name: 'Kerman', isActive: false},
        {id: '3a753a58-b86a-489d-b81f-d0cb5cb554d9', name: 'Qum', isActive: false},
        {id: 'f9a89e42-6301-4f2d-9f5f-8e7c0183d4ba', name: 'Amol', isActive: false},
        {id: 'c67dfe08-be0b-4baf-970d-995cf2a89169', name: 'Tabriz', isActive: false},
        {id: '8926381d-16c0-4439-b470-fa23bc2dcc0f', name: 'Yazd', isActive: false},
        {id: 'd2ec0494-7df2-4a4c-9f59-91fc58c54d32', name: 'Zahedan', isActive: false}
    ],
    selectedCity: {id: 'c85915d6-591f-485c-a327-b8110c86aa30', name: 'Tehran', isActive: true},
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GETALLCITIES:
            return state.cities;
        case actionTypes.SELECTCITY:
            return {...state, selectedCity: action.payload}
    }
    return state;
};

export default rootReducer;
