const CREATE_NOTE = 'create/note'
const GET_NOTE_OF_POST = 'Get/PostComments'
const EDIT_COMMENT = "/edit/comment"

export const CreateNote = (note) => {
    return {
        type:CREATE_NOTE,
        payload:note
    }
}

export const GetPostComments = (data) => {
    return {
        type: GET_NOTE_OF_POST,
        payload:data

    }

}

export const EditComments = (data,comment_id) => {
    return {
        type: EDIT_COMMENT ,
        payload:{
            data,
            comment_id

        }

    }

}






export const createNoteThunk =(note) => async (dispatch)=>{
    // const  {content,user_id,post_id} = note
    const { content, user_id, post_id } = note
    const response = await fetch(`/api/post/${post_id}/notes`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, user_id, post_id }),
    })

    if(response.ok){
        const data = await response.json()
        dispatch(CreateNote(data))
        return data
    }
    else{
        return "Not quite"

    }
}

export const getCommentsOfPostThunk = (current_post_id) => async (dispatch) =>{
  
    const response = await fetch(`/api/post/${current_post_id}/notes/get`,{
        method:"GET"
    })
    if (response.ok){
        const data = await response.json()
        dispatch(GetPostComments(data))
        return data
    }
    else{
        return "NO"
    }
}

export const EditCommentThunk = (data,current_post_id) => async (dispatch) =>{
    console.log("The data from the thunk",data)
    const response = await fetch(`/api/notes/${current_post_id}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)

    })
    if (response.ok){
        const data = await response.json()
        dispatch(EditComments(data,current_post_id))
        return data
    }
    else{
        return "NO"
    }
}


const initialState = {allPost:{}, singlePost:{}}
export default function noteReducer(state=initialState,action){

    switch(action.type){
        case CREATE_NOTE:{
            const newState = { ...state, singlePost: { ...state.singlePost } }; 
            newState.singlePost[action.payload.post_id] = action.payload;
            return newState
        }
        case GET_NOTE_OF_POST :{
              const newState = {...state,singlePost:{...state.singlePost}}
              newState.singlePost.comment = action.payload
            return newState
        }
        case EDIT_COMMENT:{
            const newState = {...state,singlePost:{...state.singlePost}}
            newState.singlePost.comment[action.payload.comment_id] = action.payload.data
         
            return newState
        }
        default:
            return state

    }




}