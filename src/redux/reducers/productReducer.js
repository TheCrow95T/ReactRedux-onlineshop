import { ActionTypes } from "../contants/actions-type";

const initialState = {
    product:[
        {
        id: 1,
        title: "I'm a title",
        category: "string", 
        },
    ],
};
export const productReducer =(state=initialState,{type,payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
};