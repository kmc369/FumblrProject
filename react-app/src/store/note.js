const CREATE_NOTE = 'create/note'
const GET_NOTE_OF_POST = 'Get/PostComments'


export const CreateNote = (note) => {
    return {
        type:CREATE_NOTE,
        payload:note
    }
}

export const GetPostComments = (note,current_post_id) => {
    return {
        type: GET_NOTE_OF_POST,
        payload:{
                note,
                current_post_id
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

export const getCommentsOfPostThunk = (note,current_post_id) => async (dispatch) =>{
    const { content, user_id, post_id } = note
    const response = await fetch(`/api/post/${post_id}/notes`,{
        method:"GET"
    })
    if (response.ok){
        const data = await response.json()
        dispatch(GetPostComments(data,current_post_id))
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
              const newState = {...state,singlePost:{...state.single}}

            return 
        }
        default:
            return state

    }




}