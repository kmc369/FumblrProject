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
export const loadPostsThunk = (data) => async (dispatch, getState) => {
    const response = await fetch("/api/text_posts/");
    console.log(response)
    if(response.ok){
        const posts = await response.json();
        dispatch(actionLoadPosts(posts));
        return posts;
    } else {
        const errors = await response.json();
        return errors;
    }
};

export const loadSpecificPostThunk = (data) => async (dispatch, getState) => {
    const res = await fetch(`/api/text_posts/posts/${data}`);
    if(res.ok) {
        const post = await res.json();
        dispatch(actionLoadSpecificPost(post));
        return post;
    } else {
        const errors = await res.json();
        return errors;
    }

};

export const loadUserPostsThunk = (data) => async (dispatch, getState) => {
    const res = await fetch(`/api/text_posts/user_posts/${data}`);
    if(res.ok) {
        const posts = await res.json();
        dispatch(actionLoadPosts(posts));
    } else {
        const errors = await res.json();
        return errors;
    }
};

export const createPostThunk = (data) => async (dispatch, getState) => {
    const res = await fetch('/api/text_posts/new_post', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    });
    if(res.ok) {
        const post = await res.json();
        dispatch(actionCreateNewPost(post));
        return post;
    } else {
        const errors = await res.json();
        return errors.errors; 
    }
};

export const updatePostThunk = (data) => async (dispatch, getState) => {
    const res = await fetch(`/api/text_posts/posts/${data}/update`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    });
    if(res.ok) {
        const updatedPost = await res.json();
        dispatch(actionUpdatePost(updatedPost));
        return updatedPost;
    } else {
        const errors = await res.json();
        return errors.errors; 
    }
};

export const deletePostThunk = data => async (dispatch, getState) => {
    const res = await fetch(`/api/text_posts/posts/${data}/delete`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    });
    if(res.ok) {
        dispatch(actionDeletePost(data))
    } else {
        const errors = await res.json();
        return errors;
    }
}




//REDUCER
const initialState = {
    allPosts: {}, 
    singlePost: {}
}
const postsReducer = (state = initialState, action) => {
    const postNewState = {...state}
    switch(action.type) {
        case LOAD_POSTS:
            postNewState.allPosts = {}
            const postsArr = Object.values(action.posts.Posts)
            postsArr.map(post => postNewState.allPosts[post.id] = post)
            return postNewState
        case CREATE_POST:
            postNewState["allPosts"] = {...postNewState.allPosts}
            postNewState.allPosts[action.post.id] = action.post
            postNewState.singlePost = action.post
            return postNewState
        case UPDATE_POST: 
            postNewState["allPosts"] = {...postNewState.allPosts}
            // postNewState["singlePost"] = {...postNewState.singlePost}
            postNewState.allPosts[action.updatedPost.id] = action.updatedPost
            postNewState.singlePost = action.updatedPost
            return postNewState
        case DELETE_POST:
            postNewState["allPosts"] = {...postNewState.allPosts}
            delete postNewState.allPosts[action.postId]
            return postNewState
        default:
            return state;
    }
};

export default postsReducer;