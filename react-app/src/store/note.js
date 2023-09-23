const CREATE_NOTE = 'create/note'



export const CreateNote = (note) => {
    return {
        type:CREATE_NOTE,
        payload:note
    }
}






export const createNoteThunk =(note) => async (dispatch)=>{
    const  {content,user_id,post_id} = note
    const response = await fetch(`/api/post/${post_id}/notes`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({note})
    })

    if(response.ok){
        const data = await response.json()
        dispatch(CreateNote(data,post_id))
        return data
    }
    else{
        return "Not quite"

    }
}

const initialState = {allPost:{}, singlePost:{}}
export default function noteReducer(state=initialState,action){

    switch(action.type){
        case CREATE_NOTE:{
            const newState = { ...state };
            const singlePostCopy = { ...newState.singlePost[action.payload.note.post_id] };            newState.singlePost.push(action.payload.note)
            
            singlePostCopy.comments.push(action.payload.note);

            newState.singlePost[action.payload.note.post_id] = singlePostCopy;

            return newState
        }
        default:
            return state

    }




}