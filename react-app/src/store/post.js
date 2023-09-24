//ACTION TYPES
export const LOAD_POSTS = 'posts/LOAD_POSTS';
export const LOAD_SPECIFIC_POST = 'posts/LOAD_SPECIFIC_POST';
export const LOAD_USER_POSTS = 'posts/LOAD_USER_POSTS';
export const CREATE_POST = 'posts/CREATE_POST';
export const DELETE_POST = 'posts/DELETE_POST';
export const UPDATE_POST = 'posts/UPDATE_POST';

//ACTIONS
export const actionCreateNewPost = (post) => {
    return {
        type: CREATE_POST,
        post
    }
};

export const actionLoadPosts = (posts) => {
    return {
        type: LOAD_POSTS,
        posts
    }
};

export const actionLoadSpecificPost = (post) => {
    return {
        type: LOAD_SPECIFIC_POST,
        post
    }
};

export const actionUpdatePost = (updatedPost) => {
    return {
        type: UPDATE_POST,
        updatedPost
    }
};

export const actionDeletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
};

//THUNKS

//REDUCER
const initialState = {
    allPosts: {}, 
    singlePost: {}
}
const postsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_POSTS:
            return state
        case CREATE_POST:
            return state
        case DELETE_POST:
            return state
        case UPDATE_POST: 
            return state
        default:
            return state;
    }
};

export default postsReducer;