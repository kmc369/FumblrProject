const CREATE_NOTE = 'create/note'
const GET_NOTE_OF_POST = 'Get/PostComments'
const EDIT_COMMENT = "/edit/comment"
const GET_COMMENTS = "get/Comments"
const DELETE_COMMENT = "delete/comment"


export const DeleteNote = (comment_id, data) => {
    return {
        type: DELETE_COMMENT,
        payload: {
            comment_id,
            data

        }
    }
}

export const CreateNote = (note) => {
    return {
        type: CREATE_NOTE,
        payload: note
    }
}

export const GetPostComments = (current_post_id, data) => {
    return {
        type: GET_NOTE_OF_POST,
        // payload:
        // {
        //     current_post_id,
        //     data
        // }
        payload:
        {
            [current_post_id]: data  //edited by WL for Note bug: change format to POJO

        }

    }
}

export const GetComments = (data) => {
    return {
        type: GET_COMMENTS,
        payload: data
    }
}


export const EditComments = (data, comment_id) => {
    return {
        type: EDIT_COMMENT,
        payload: {
            data,
            comment_id

        }

    }

}



export const deleteCommentThunk = (comment_id) => async (dispatch) => {
    // console.log("the comment id is ",comment_id)
    const response = await fetch(`/api/delete/note/${comment_id}`, {
        method: "DELETE"
    })
    if (response.ok) {
        const data = await response.json()
        // console.log("the data coming back is ", data)
        dispatch(DeleteNote(comment_id, data))
        return data
    }
    else {
        return "NO"
    }
}


export const getCommentByIdThunk = (comment_id) => async (dispatch) => {

    const response = await fetch(`/api/note/${comment_id}`, {
        method: "GET"
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(GetComments(data))
        return data
    }
    else {
        return "NO"
    }
}

export const createNoteThunk = (note) => async (dispatch) => {
    // const  {content,user_id,post_id} = note
    const { content, user_id, post_id } = note
    // console.log("the note id post the thunk is ", post_id)
    const response = await fetch(`/api/post/${post_id}/notes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, user_id, post_id }),
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(CreateNote(data))
        return data
    }
    else {
        return "Not quite"

    }
}

export const getCommentsOfPostThunk = (current_post_id) => async (dispatch) => {

    const response = await fetch(`/api/post/${current_post_id}/notes/get`, {
        method: "GET"
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(GetPostComments(current_post_id, data))
        return data
    }
    else {
        return "NO"
    }
}

export const EditCommentThunk = (notedata, current_note_id) => async (dispatch) => {
    const { content, post_id, user_id } = notedata
    // console.log("note data form thunk", content)
    const response = await fetch(`/api/notes/${current_note_id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, user_id, post_id })

    })
    if (response.ok) {
        const data = await response.json()
        dispatch(EditComments(data, current_note_id))
        return data
    }
    else {
        return "NO"
    }
}

// const initialState = { singlePost: {} }
const initialState = { singlePost: {}, comments: {} }  //edited by WL for Note bug: add comments
export default function noteReducer(state = initialState, action) {

    switch (action.type) {
        case CREATE_NOTE: {
            const newState = { ...state, singlePost: { ...state.singlePost } };
            newState.singlePost[action.payload.post_id] = action.payload;
            return newState
        }
        case GET_NOTE_OF_POST: {
            const newState = { ...state, singlePost: { ...state.singlePost } }
            newState.singlePost.comment = action.payload.data
            newState.comments = { ...state.comments, ...action.payload }  //edited by WL for Note bug: save comments 
            return newState
        }
        case EDIT_COMMENT: {
            // const { comment_id, data } = action.payload;

            // const newState = {
            //     ...state, singlePost: {
            //         ...state.singlePost,
            //         comment: state.singlePost.comment.map((comment) => {
            //             if (comment.id === comment_id) {
            //                 return { ...comment, ...data };
            //             } else {
            //                 return comment;
            //             }
            //         }),
            //     },
            // };
            const newState = { ...state, singlePost: { ...state.singlePost }, comments: { ...state.comments } }   //edited by WL for Note bug: update newState.comments other than newState.singlePost.comment, so that main page edit works
            const post_id = action.payload.data.post_id
            for (let i = 0; i < newState.comments[post_id].length; i++) {
                if (newState.comments[post_id][i].id === action.payload.data.id) {
                    newState.comments[post_id][i] = { ...action.payload.data };
                }
            }

            console.log("############")
            console.log(newState)

            return newState;
        }
        case GET_COMMENTS: {
            const newState = { ...state, singlePost: { ...state.singlePost } }
            newState.singlePost.comment = action.payload
            return newState
        }
        case DELETE_COMMENT: {
            const newState = { ...state }
            // delete newState.singlePost[action.payload.comment_id]
            // newState.singlePost.comment = newState.singlePost.comment.filter(    //edited by WL for Note bug: commented out due to issue when deleting notes on homepage with operations on multiple notes
            //     (comment) => comment.id !== action.payload.comment_id
            // );
            for (let post_id in newState.comments) {                                //edited by WL for Note bug: update newState.comments other than newState.singlePost.comment
                newState.comments[post_id] = [...newState.comments[post_id].filter(
                    (comment) => comment.id !== action.payload.comment_id
                )
                ]
            }
            // console.log("newState after deleting comment:", newState); // Debugging


            return newState
        }
        default:
            return state

    }




}