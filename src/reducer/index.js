import { ActionType } from "./ActionType";

export const initialState = {
    blogs : [],
    blog : {}
}

export const reducer = (state, {type, payload}) => {
    switch(type) {
        case ActionType.FETCH_BLOGS : return {
            ...state,
            blogs: payload
        }
    }
}