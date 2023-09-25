// actions
export const SEARCH_POSTS = 'SEARCH_POSTS';

export const searchPosts = (posts) => ({
    type: SEARCH_POSTS,
    payload: posts,
});

//thunk

export const searchPostsThunk = (searchItem) => async dispatch => {
    try {
        const response = await fetch(`/api/search/${searchItem}`);
        const data = await response.json();
        dispatch(searchPosts(data.posts));
    } catch (error) {
        console.error(error);
    }
};

// reducer

const initialState = {
    posts: [],
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_POSTS:
            return {
                ...state,
                posts: [...action.payload]
            };
        default:
            return state;
    }
};

export default searchReducer;