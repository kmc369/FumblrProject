// actionTypes
export const COUNT_LIKES = 'COUNT_LIKES';
export const LIKE_POST = 'LIKE_POST';
export const UNLIKE_POST = 'UNLIKE_POST';

// actions
export const countLikes = (likes) => ({
    type: COUNT_LIKES,
    payload: likes,
});

export const likePost = (likes) => ({
    type: LIKE_POST,
    payload: likes,
});

export const unlikePost = (likes) => ({
    type: UNLIKE_POST,
    payload: likes,
});

//thunks
export const fetchLikesThunk = (post_id, user_id) => async (dispatch) => {      //get number of likes and if current user likes the post or not
    try {
        const response = await fetch(`/api/likes/post/${post_id}`, {
            method: 'POST',     //use POST to pass current user_id and functionality information by request body
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ function: 'fetchLikes', user_id: user_id }),     //pass function and user_id to backend
        });
        const data = await response.json();
        dispatch(countLikes(data.likes));
    } catch (error) {
        console.error(error);
    }
};

export const addLikeThunk = (post_id, user_id) => async (dispatch) => {     //add like for current user
    try {
        const response = await fetch(`/api/likes/post/${post_id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ function: 'addLike', user_id: user_id }),       //pass function and user_id to backend
        });
        const data = await response.json();
        dispatch(likePost(data.likes));
    } catch (error) {
        console.error(error);
    }
};

export const removeLikeThunk = (post_id, user_id) => async (dispatch) => {
    try {
        const response = await fetch(`/api/likes/post/${post_id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: user_id }),
        });
        const data = await response.json();
        dispatch(unlikePost(data.likes));
    } catch (error) {
        console.error(error);
    }
};

//reducer

const initialState = {
    likes: {}
};

const likeReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNT_LIKES:
            return {
                ...state,
                likes: { ...action.payload }
            };
        case LIKE_POST:
            return {
                ...state,
                likes: { ...action.payload },
            };
        case UNLIKE_POST:
            return {
                ...state,
                likes: { ...action.payload },
            };
        default:
            return state;
    }
};

export default likeReducer;