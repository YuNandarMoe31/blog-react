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
        case ActionType.ADD_BLOG : return {
            ...state,
            blog : [...state.blogs, payload]
        }
        case ActionType.SELECTED_BLOGS : return {
            ...state,
            blog: payload
        }
        
    }
}