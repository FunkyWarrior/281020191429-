import * as types  from "../actionTypes"

export const addReview = () => ({
    type: types.ADD_REVIEW,
});

export const addName = payload => ({
    type: types.ADD_NAME,
    payload
});

export const addComment = payload => ({
    type: types.ADD_COMMENT,
    payload
});
